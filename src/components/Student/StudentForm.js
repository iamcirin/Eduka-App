import React from "react";
import Layout from "../Auth/Layout";
import Header from "../Dashboard/Content/Header";

const StudentForm = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <Header title="Student Registration" />
        <div
          class="w-75 card card-primary mx-auto p-4"
          style={{ minHeight: 500 }}
        >
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StudentForm;
