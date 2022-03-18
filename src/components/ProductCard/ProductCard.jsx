import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { cartListState, cartListDispatch } = useCartContext();
  const { wishlistState, wishlistDispatch } = useWishlistContext();

  return (
    <div className="card-vertical">
      <div className="card-img">
        <img src={product.image} alt="" />
        <span className="card-badge">NEW</span>
        {wishlistState.wishlist.find((obj) => obj._id === product._id) ? (
          <i
            onClick={() =>
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              })
            }
            className="fa-solid fa-heart fa-lg card-heart-icon wishlist-heart card-close"
          ></i>
        ) : (
          <i
            onClick={() =>
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              })
            }
            className="far fa-heart fa-lg card-heart-icon wishlist-heart card-close"
          ></i>
        )}
      </div>
      <div className="card-description-container">
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
        <div className="card-footer">
          <div className="card-button">
            {cartListState.cartList.find(
              (cartItem) => cartItem._id === product._id
            ) ? (
              <button className="btn btn-success move-to-cart">
                <Link to="/cart">Go To Cart</Link>
              </button>
            ) : (
              <button
                onClick={() =>
                  cartListDispatch({ type: "ADD_TO_CART", payload: product })
                }
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
