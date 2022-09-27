import { createContext, useState } from "react";

const StudentContext = createContext({});

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    list: [],
    loading: false,
    error: null,
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
