import React, { useState } from "react";
import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import { useAuthContext } from "../../context/auth-context";

export const Navbar = () => {
  const { cartListState } = useCartContext();
  const { wishlistState } = useWishlistContext();

  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const { auth, setAuth } = useAuthContext();

  const navbarCartClickHandler = () => {
    auth.isLoggedIn ? navigate("/cart") : navigate("/login");
  };

  const navbarWishlistClickHandler = () => {
    auth.isLoggedIn ? navigate("/wishlist") : navigate("/login");
  };

  const logoutHandler = () => {
    console.log("logout handler");
    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("USER_DATA");

    setAuth({
      isLoggedIn: localStorage.getItem("USER_TOKEN") ? true : false,
      token: localStorage.getItem("USER_TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_DATA")),
    });

    setShowProfileDropdown(false);
    navigate("/login");
  };

  return (
    <div className="Navbar">
      <div className="left-navbar">
        <div className="logo-title">
          <Link to="/">3AM TALES</Link>
        </div>
      </div>
      <div className="center-navbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="" id="search-bar" placeholder="Search" />
      </div>
      <div className="right-navbar">
        <div
          onClick={() => navbarWishlistClickHandler()}
          className="badge-container"
        >
          <i className="fa-solid fa-heart fa-lg navbar-icons"></i>
          {wishlistState.wishlist.length !== 0 ? (
            <div className="badge badge-number">
              {wishlistState.wishlist.length}
            </div>
          ) : null}
        </div>

        <div
          onClick={() => navbarCartClickHandler()}
          className="navbar-cart badge-container"
        >
          <i className="fa-solid fa-cart-shopping fa-lg navbar-icons"></i>
          <span>Cart</span>
          {cartListState.cartList.length === 0 ? null : (
            <div className="badge badge-number">
              {cartListState.cartList.length}
            </div>
          )}
        </div>

        {auth.isLoggedIn ? (
          <div className="navbar-profile-container">
            <div
              className="navbar-profile-title-container"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <p className="navbar-profile-title">
                Hi, {auth.user.fullName.split(" ")[0]}
              </p>
              <p className="navbar-profile-title-account">
                Account <i class="fa-solid fa-caret-down"></i>
              </p>
            </div>
            <div
              className={`navbar-profile-dropdown-container ${
                showProfileDropdown === false ? "display-none" : null
              }`}
            >
              <button className="btn btn-outline-primary navbar-dropdown-my-rofile">
                <Link to="/">Profile</Link>
              </button>
              <button
                className="btn btn-primary"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button className="btn btn-primary">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};
