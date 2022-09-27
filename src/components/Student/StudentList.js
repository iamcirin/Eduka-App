import React from "react";
import Layout from "../Auth/Layout";
import Header from "../Dashboard/Content/Header";
import ListContent from "./ListContent";

const StudentList = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <Header title="Student List" />

        <ListContent />
      </div>
    </Layout>
  );
};

export default StudentList;
