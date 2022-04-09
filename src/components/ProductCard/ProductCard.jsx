import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { cart, addProductToCart } = useCartContext();
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useWishlistContext();

  const { auth } = useAuthContext();

  const navigate = useNavigate();

  const cardClickHandler = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="card-vertical"
      onClick={() => {
        cardClickHandler(product._id);
      }}
    >
      <div className="card-img">
        <img src={product.image} alt="" />
        <span className="card-badge">NEW</span>
        {wishlist.find((obj) => obj._id === product._id) ? (
          <i
            onClick={(e) => {
              e.stopPropagation();
              removeProductFromWishlist(product._id);
            }}
            className="fa-solid fa-heart fa-xl card-heart-icon wishlist-heart card-close"
          ></i>
        ) : (
          <i
            onClick={(e) => {
              e.stopPropagation();
              auth.isLoggedIn
                ? addProductToWishlist(product)
                : navigate("/login");
            }}
            className="far fa-heart fa-xl card-heart-icon wishlist-heart card-close"
          ></i>
        )}
      </div>
      <div className="card-description-container">
        <div className="card-navigate-container">
          <div className="card-title">
            <h4>{product.title}</h4>
          </div>
          <div className="card-description">
            <p>{product.author}</p>
          </div>
          <div className="card-price">
            <span className="sale-price">Rs. {product.discountPrice}</span>
            <span className="mrp-price">Rs. {product.mrpPrice}</span>
            <span className="card-discount">({product.discountPercent}%)</span>
            <span className="card-rating">
              {product.rating}
              <i className="fa-solid fa-star fa-sm"></i>
            </span>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-button">
            {cart.find((cartItem) => cartItem._id === product._id) ? (
              <button
                className="btn btn-success move-to-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/cart");
                }}
              >
                Go To Cart
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  auth.isLoggedIn
                    ? addProductToCart(product)
                    : navigate("/login");
                }}
                className="btn btn-icon add-to-cart"
              >
                <i className="fas fa-shopping-cart"></i>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
