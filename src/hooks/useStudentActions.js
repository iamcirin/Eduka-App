import React, { useCallback } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import useStudent from "./useStudent";

const useStudentActions = () => {
  const { student, setStudent } = useStudent();
  const axiosPrivate = useAxiosPrivate();

  const getALlStudents = useCallback(async () => {
    setStudent((prev) => ({ ...prev, loading: true }));
    try {
      const res = await axiosPrivate.get("/student");

      setStudent((prev) => ({
        ...prev,
        loading: false,
        error: null,
        list: res.data,
      }));
    } catch (error) {
      setStudent((prev) => ({
        ...prev,
        loading: false,
        error: error?.response?.message,
        list: [
          //   {
          //     _id: 1,
          //     fname: "john",
          //     lname: "john",
          //     status: "",
          //   },
        ],
      }));
    }
  }, [axiosPrivate]);
  const registerStudent = useCallback(
    async (payload, cb) => {
      setStudent((prev) => ({ ...prev, loading: true }));
      try {
        const res = await axiosPrivate.post("/student", payload);

        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: null,
          list: [{ ...res.data }, ...prev.list],
        }));
        cb(null, res.data);
      } catch (error) {
        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: error?.response?.message,
        }));
        cb(error?.response?.messag, null);
      }
    },
    [axiosPrivate]
  );

  const setStudentStatus = useCallback(
    async (std, status) => {
      setStudent((prev) => ({ ...prev, loading: true }));
      try {
        const res = await axiosPrivate.patch(`/student/${std._id}`, { status });

        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: null,
          list: prev.list.map((item) => {
            if (item._id === res.data._id) {
              return res.data;
            }
            return item;
          }),
        }));
      } catch (error) {
        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: error.response.message,
        }));
      }
    },
    [axiosPrivate]
  );
  const notifyParent = useCallback(
    async (std) => {
      setStudent((prev) => ({ ...prev, loading: true }));
      try {
        const res = await axiosPrivate.post(`/notify`, { _id: std._id });

        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: null,
        }));

        alert(res.data.message);
      } catch (error) {
        setStudent((prev) => ({
          ...prev,
          loading: false,
          error: error.response.message,
        }));
      }
    },
    [axiosPrivate]
  );

  return {
    getALlStudents,
    student,
    setStudentStatus,
    registerStudent,
    notifyParent,
  };
};

export default useStudentActions;
