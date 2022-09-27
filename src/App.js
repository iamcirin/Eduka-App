import React from "react";
import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/Auth/RequireAuth";
import StudentList from "./components/Student/StudentList";
import StudentForm from "./components/Student/StudentForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="eduka/register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/student-form" element={<StudentForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
