import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar navbar">
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
        {/* <a href="./pages/wishlist/wishlist.html"></a> */}
        <Link to="/wishlist">
          <i className="fa-regular fa-heart fa-lg navbar-icons"></i>
        </Link>

        {/* <a href="./pages/cart/cart.html" className="navbar-cart">
        </a> */}

        <Link to="/cart" className="navbar-cart">
          <i className="fa-solid fa-cart-shopping fa-lg navbar-icons"></i>
          <span>Cart</span>
        </Link>

        <button className="btn btn-primary">
          <Link to="/login">
            <a href="./auth/login/login.html">Login</a>
          </Link>
        </button>
      </div>
    </div>
  );
};
