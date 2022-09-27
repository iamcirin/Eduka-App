import React from "react";

const Sidebar = () => {
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
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table"></i>
            <p>
              Tables
              <i className="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/tables/simple.html" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>View students</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
