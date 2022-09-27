import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginIcon from "../images/user2.png";
import "./login.css";
import loginImg from "../images/login2.png";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useLogin();
  const { auth } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Minimum of 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await loginUser(values, (err, res) => {
        if (err) {
          alert(err.response.message);
          return;
        }
        navigate("/dashboard");
      });
    },
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 p-3 mb-5">
            <img className="icon-img" src={loginIcon} alt="" />
            <form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Form.Group>

              <Button
                variant="primary btn-primary col-12"
                type="submit"
                disabled={auth.loading}
              >
                {auth.loading && (
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Login
              </Button>
              <div className="text-left mt-1">
                <small className="reset">No account?</small>
              </div>
              <Link to="eduka/register">
                <Button
                  variant="primary btn-primary col-12 reg-btn"
                  type="button"
                  disabled={auth.loading}
                >
                  Register
                </Button>
              </Link>
            </form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={loginImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
