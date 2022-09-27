import React, { useState, useRef } from 'react';
import signupImg from '../images/signup-image.jpg';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const Register = () => {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    childName: '',
    password: '',
  });
  const [res, setRes] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        fullName: info.fullName,
        email: info.email,
        childName: info.childName,
        password: info.password,
      };
      await axios.post('changethis', user);
      navigate('/login');
    } catch (error) {
      console.log(error);
      setRes(true);
    }
  };
  return (
    <div class="main">
      {res && <Modal res={res} setRes={setRes} />}
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form
                className="register-form"
                id="register-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label for="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="name"
                    placeholder="Your Name"
                    value={info.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={info.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label for="childName">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    id="childName"
                    placeholder="Your Child Name"
                    value={info.childName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label for="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    value={info.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signupImg} alt="sing up" />
              </figure>
              <Link to="/" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
