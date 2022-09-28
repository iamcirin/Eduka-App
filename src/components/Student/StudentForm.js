import { useFormik } from "formik";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../Auth/Layout";
import Header from "../Dashboard/Content/Header";
import * as Yup from "yup";
import useStudentActions from "../../hooks/useStudentActions";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const { student, registerStudent } = useStudentActions();

  const navigate = useNavigate();

  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      parentEmail: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("First name is required"),
      lname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Student email is required"),
      parentEmail: Yup.string()
        .email("Invalid email address")
        .required("Parent email is required"),
    }),
    onSubmit: async (values, formikHelpers) => {
      registerStudent(values, (err, res) => {
        if (err) {
          alert("Something went wrong");
          return;
        }
        formikHelpers.setValues({
          fname: "",
          lname: "",
          email: "",
          parentEmail: "",
        });
        alert("Student registered");
      });
    },
  });

  return (
    <Layout>
      <div className="content-wrapper">
        <Header title="Student Registration" />
        <div
          class="w-75 card card-primary mx-auto p-4"
          style={{ minHeight: 500 }}
        >
          <Container className="mt-5">
            <Row>
              <Col className="text-center mt-1 p-3 mb-5">
                <form onSubmit={formik.handleSubmit} noValidate>
                  <Form.Group className="mb-3 d-flex flex-column">
                    <Form.Control
                      className={`${formik.errors.fname ? "is-invalid" : ""}`}
                      type="text"
                      placeholder="Enter First Name"
                      name="fname"
                      onChange={formik.handleChange}
                      value={formik.values.fname}
                    />
                    {formik.errors.fname && (
                      <small className="text-danger text-left">
                        {formik.errors.fname}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex flex-column">
                    <Form.Control
                      className={`${formik.errors.lname ? "is-invalid" : ""}`}
                      type="text"
                      placeholder="Enter Last Name"
                      name="lname"
                      onChange={formik.handleChange}
                      value={formik.values.lname}
                    />
                    {formik.errors.lname && (
                      <small className="text-danger text-left">
                        {formik.errors.lname}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex flex-column">
                    <Form.Control
                      className={`${formik.errors.email ? "is-invalid" : ""}`}
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && (
                      <small className="text-danger text-left">
                        {formik.errors.email}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex flex-column">
                    <Form.Control
                      className={`${
                        formik.errors.parentEmail ? "is-invalid" : ""
                      }`}
                      type="email"
                      placeholder="Enter Parent Email"
                      name="parentEmail"
                      onChange={formik.handleChange}
                      value={formik.values.parentEmail}
                    />
                    {formik.errors.parentEmail && (
                      <small className="text-danger text-left">
                        {formik.errors.parentEmail}
                      </small>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary btn-primary col-12"
                    type="submit"
                    disabled={student.loading}
                  >
                    {student.loading && (
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Register Student
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default StudentForm;
