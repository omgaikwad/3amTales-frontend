import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";

export const Navbar = () => {
  const { cartListState } = useCartContext();
  const { wishlistState } = useWishlistContext();

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
        <Link to="/wishlist" className="badge-container">
          <i className="fa-solid fa-heart fa-lg navbar-icons"></i>
          {wishlistState.wishlist.length !== 0 ? (
            <div className="badge badge-number">
              {wishlistState.wishlist.length}
            </div>
          ) : null}
        </Link>

        <Link to="/cart" className="navbar-cart badge-container">
          <i className="fa-solid fa-cart-shopping fa-lg navbar-icons"></i>
          <span>Cart</span>
          {cartListState.cartList.length === 0 ? null : (
            <div className="badge badge-number">
              {cartListState.cartList.length}
            </div>
          )}
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
