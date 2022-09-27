import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Sidebar = () => {
  const { logoutUser } = useLogin();

  const handleLogout = (e) => {
    e.preventDefault();

    logoutUser();
  };

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        {/*  Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit"></i>
            <p>
              Forms
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Register student</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/student-list" className="nav-link">
            <i className="nav-icon fas fa-table"></i>
            <p> Student List</p>
          </Link>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleLogout}>
            <i className="nav-icon fas fa-user"></i>
            <p>Logout</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
