import React from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import loginIcon from '../images/user2.png'
import './login.css'
import loginImg from '../images/login2.png'
import {Link} from 'react-router-dom'



const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 p-3 mb-5">
            <img className="icon-img" src={loginIcon} alt="" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary btn-primary col-12" type="submit">
                Login
              </Button>
              <div className="text-left mt-1">
                <small className="reset">No account?</small>
              </div>
              <Link to='eduka/register'>
                <Button
                  variant="primary btn-primary col-12 reg-btn"
                  type="submit"
                >
                  Register
                </Button>
              </Link>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={loginImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login