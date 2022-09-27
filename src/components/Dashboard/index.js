import React from "react";
import Layout from "../Auth/Layout";
import Header from "./Content/Header";
import Main from "./Content/Main";
import "./style.css";
const Dashboard = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <Header title="Dashboard" />

        <Main />
      </div>
    </Layout>
  );
};

export default Dashboard;
