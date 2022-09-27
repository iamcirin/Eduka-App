import React from "react";
import Avatar from "./Avatar";
import Header from "./Content/Header";
import Main from "./Content/Main";
import Footer from "./Footer";
import Logo from "./Logo";
import Preloader from "./Preloader";
import Search from "./Search";
import Sidebar from "./Sidebar";
import "./style.css";
const Dashboard = () => {
  return (
    <div className="dashboard wrapper">
      {/*  */}
      {/*  Preloader*/}
      {/* <Preloader /> */}

      {/*  Navbar*/}
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

        {/*  Right navbar links*/}
        <ul className="navbar-nav ml-auto"></ul>
      </nav>
      {/*  /.navbar*/}

      {/*  Main Sidebar Container*/}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/*  Brand Logo*/}
        <Logo />

        {/*  Sidebar*/}
        <div className="sidebar">
          {/*  Sidebar user panel (optional)*/}
          <Avatar />

          {/*  SidebarSearch Form*/}
          <Search />

          {/*  Sidebar Menu*/}
          <Sidebar />
          {/*  /.sidebar-menu*/}
        </div>
        {/*  /.sidebar*/}
      </aside>

      {/*  Content Wrapper. Contains page content*/}
      <div className="content-wrapper">
        {/*  Content Header (Page header)*/}
        <Header />
        {/*  /.content-header*/}

        {/*  Main content*/}
        <Main />
        {/*  /.content*/}
      </div>
      {/*  /.content-wrapper*/}
      <Footer />
    </div>
  );
};

export default Dashboard;
