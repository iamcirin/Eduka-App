import { useContext } from "react";
import StudentContext from "../context/StudentContext";

const useStudent = () => {
  const { student, setStudent } = useContext(StudentContext);
  return {
    student,
    setStudent,
  };
};

export default useStudent;
