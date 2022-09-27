import React from "react";
import Avatar from "../Avatar";
import Search from "../Dashboard/Search";
import Footer from "../Footer";
import Logo from "../Logo";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="dashboard wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/*  Left navbar links*/}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto"></ul>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Logo />

        <div className="sidebar">
          <Avatar />

          <Search />

          <Sidebar />
        </div>
      </aside>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
