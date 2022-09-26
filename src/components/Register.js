import React from 'react'
import signupImg from '../images/signup-image.jpg';
import './register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div class="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label for="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
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
                    />
                 
                 
                </div>

                <div className="form-group">
                  <label for="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="re-pass">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Repeat your password"
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
}

export default Register