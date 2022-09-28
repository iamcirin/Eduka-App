import React, { useEffect } from "react";
import useStudentActions from "../../hooks/useStudentActions";

const COLOR = {
  PRESENT: "green",
  ABSENT: "red",
  EXCUSED: "yello",
};

const ListContent = () => {
  const { getALlStudents, student, setStudentStatus, notifyParent } =
    useStudentActions();

  useEffect(() => {
    getALlStudents();
  }, []);

  const handleStudentStatus = (std, status) => {
    if (student.loading) return;
    setStudentStatus(std, status);
  };
  const handleNotify = (std) => {
    if (student.loading) return;
    notifyParent(std);
  };

  return (
    <div className="px-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
            <th scope="col">Notify</th>
          </tr>
        </thead>
        <tbody>
          {student.list.map((std) => (
            <tr key={std._id}>
              <td>{std.fname}</td>
              <td>{std.lname}</td>
              <td>{std.status}</td>
              <td>
                <i
                  onClick={() => handleStudentStatus(std, "PRESENT")}
                  className="nav-icon fas fa-user"
                  style={{ color: "green" }}
                ></i>
                <i
                  onClick={() => handleStudentStatus(std, "ABSENT")}
                  className="nav-icon fas fa-user mx-2"
                  style={{ color: "red" }}
                ></i>
                <i
                  onClick={() => handleStudentStatus(std, "EXCUSED")}
                  className="nav-icon fas fa-user"
                  style={{ color: "gray" }}
                ></i>
              </td>
              <td>
                <button
                  className="btn btn-warning text-white"
                  onClick={() => handleNotify(std)}
                  disabled={student.loading}
                >
                  <i className="nav-icon fas fa-bell"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListContent;
