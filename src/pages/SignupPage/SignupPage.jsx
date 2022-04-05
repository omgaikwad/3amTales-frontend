import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../context/auth-context";
const axios = require("axios").default;

const SignupPage = () => {
  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const { auth, setAuth } = useAuthContext();

  const [showPasswordError, setShowPasswordError] = useState(false);

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordAgain: false,
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (signupDetails.password !== signupDetails.passwordAgain) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
      setSignupDetails({
        fullName: "",
        email: "",
        password: "",
        passwordAgain: "",
      });

      const createNewUser = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            fullName: signupDetails.fullName,
            email: signupDetails.email,
            password: signupDetails.password,
          });
          localStorage.setItem("USER_TOKEN", response.data.encodedToken);
          setAuth({
            isLoggedIn: true,
            token: response.data.encodedToken,
            user: {
              fullName: response.data.createdUser.fullName,
              email: response.data.createdUser.email,
            },
          });
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      };
      createNewUser();
    }
  };

  return (
    <div className="SignupPage">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <h3 className="signup-heading">Sign Up</h3>

          <label htmlFor="form-full-name">Full Name</label>
          <input
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, fullName: e.target.value })
            }
            value={signupDetails.fullName}
            id="form-full-name"
            type="text"
            placeholder="John Wick"
            required
          />

          <label htmlFor="form-email">Email</label>
          <input
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, email: e.target.value })
            }
            value={signupDetails.email}
            id="form-email"
            type="email"
            placeholder="abc@xyz.com"
            required
          />

          <label htmlFor="form-password">Create Password </label>
          <div className="create-password-container">
            <input
              onChange={(e) =>
                setSignupDetails({ ...signupDetails, password: e.target.value })
              }
              value={signupDetails.password}
              id="form-password"
              type={showPasswords.password ? "text" : "password"}
              placeholder="••••••••••••••"
              required
            />
            <span className="password-eye-icon">
              {showPasswords.password ? (
                <i
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      password: !showPasswords.password,
                    })
                  }
                  className="fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      password: !showPasswords.password,
                    })
                  }
                  class="fa-solid fa-eye-slash"
                ></i>
              )}
            </span>
          </div>

          {/* Show Passwords doesn't match Error  */}

          {showPasswordError && (
            <p className="show-error-text">Passwords Does Not Match</p>
          )}

          <label htmlFor="form-password-again">Confirm Password </label>
          <div className="password-again-container">
            <input
              onChange={(e) =>
                setSignupDetails({
                  ...signupDetails,
                  passwordAgain: e.target.value,
                })
              }
              value={signupDetails.passwordAgain}
              id="form-password-again"
              type={showPasswords.passwordAgain ? "text" : "password"}
              placeholder="••••••••••••••"
              required
            />
            <span className="password-again-eye-icon">
              {showPasswords.passwordAgain ? (
                <i
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      passwordAgain: !showPasswords.passwordAgain,
                    })
                  }
                  className="fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    setShowPasswords({
                      ...showPasswords,
                      passwordAgain: !showPasswords.passwordAgain,
                    })
                  }
                  class="fa-solid fa-eye-slash"
                ></i>
              )}
            </span>
          </div>

          <div className="form-checkbox">
            <input id="terms-and-conditions" type="checkbox" required />
            <label htmlFor="terms-and-conditions">
              I agree to the terms and conditions.
            </label>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary signup-btn">
              Sign Up
            </button>
          </div>
          <div className="login-redirect-container">
            <Link to="/login" className="login-redirect-link btn-link">
              Already have an account
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
