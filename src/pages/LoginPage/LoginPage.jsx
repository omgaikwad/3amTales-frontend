import React from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../context/auth-context";
const axios = require("axios").default;

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { auth, setAuth } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const [showLoginError, setShowLoginError] = useState({
    showError: true,
    message: "Login to add items in Cart and Wishlist.",
  });

  const loginExistingUser = async () => {
    try {
      const response = await axios.post("/api/auth/login", loginDetails);

      localStorage.setItem("USER_TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_DATA",
        JSON.stringify({
          fullName: response.data.foundUser.fullName,
          email: response.data.foundUser.email,
        })
      );

      setAuth({
        isLoggedIn: true,
        token: response.data.encodedToken,
        user: {
          fullName: response.data.foundUser.fullName,
          email: response.data.foundUser.email,
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      setShowLoginError({
        showError: true,
        message: "Email or Password is wrong",
      });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginDetails({
      email: "",
      password: "",
    });

    loginExistingUser();
  };

  // Guest Login Handler
  const guestLoginHandler = () => {
    setLoginDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    loginExistingUser();
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <h3 className="login-heading">Login</h3>

          <label htmlFor="form-email">Email</label>
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

          <label htmlFor="form-password">Password</label>
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
                  className="fa-solid fa-eye-slash"
                ></i>
              )}
            </span>
          </div>

          {/* Show Error  */}

          {showLoginError.showError && (
            <p className="show-error-text"> {showLoginError.message} </p>
          )}

          <div className="form-buttons">
            <button type="submit" className="btn btn-outline-primary login-btn">
              Login
            </button>
            <button
              onClick={() => guestLoginHandler()}
              className="btn btn-primary login-btn"
            >
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
