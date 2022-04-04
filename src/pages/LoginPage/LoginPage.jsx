import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginDetails({
      email: "",
      password: "",
    });
    console.log(loginDetails);
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h3 className="login-heading">Login</h3>

          <label for="form-email">Email</label>
          <input
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                email: e.target.value,
              })
            }
            value={loginDetails.email}
            id="form-email"
            type="email"
            placeholder="abc@xyz.com"
            required
          />

          <label for="form-password">Password</label>
          <div className="login-password-container">
            <input
              onChange={(e) =>
                setLoginDetails({
                  ...loginDetails,
                  password: e.target.value,
                })
              }
              value={loginDetails.password}
              id="form-password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••"
              required
            />
            <span className="login-password-eye-icon">
              {showPassword ? (
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className="fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  class="fa-solid fa-eye-slash"
                ></i>
              )}
            </span>
          </div>

          <div className="form-checkbox">
            <div className="checkbox-container">
              <input id="remember-me-checkbox" type="checkbox" required />
              <label htmlFor="remember-me-checkbox">Remember Me</label>
            </div>
            <a href="" className="forgot-password">
              Forgot your Password?
            </a>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary login-btn">
              Login
            </button>
            <button className="btn btn-success login-btn">
              Login as Guest
            </button>
          </div>
          <div className="signup-redirect-container">
            <Link to="/signup" className="signup-redirect-link btn-link">
              Create New Account <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
