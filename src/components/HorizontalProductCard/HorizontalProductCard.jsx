import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./HorizontalProductCard.css";

const HorizontalProductCard = ({ product }) => {
  const { removeProductFromCart, updateProductCartQuantity } = useCartContext();
  const { wishlist, addProductToWishlist, removeProductFromWishlist } =
    useWishlistContext();

  return (
    <div className="HorizontalProductCard card-horizontal">
      <div className="card-img-horizontal">
        <img src={product.image} alt="" />
      </div>
      <div className="card-horizontal-content">
        <div className="card-title">
          <h4> {product.title} </h4>
        </div>
        <div className="card-description">
          <p> {product.author} </p>
        </div>
        <div className="card-price">
          <span className="sale-price">Rs. {product.discountPrice}</span>
          <span className="mrp-price">Rs. {product.mrpPrice}</span>
          <span className="card-discount">({product.discountPercent}%)</span>
        </div>
        <div className="cart-product-quantity">
          <span>Quantity: </span>
          <i
            onClick={() =>
              product.qty > 1
                ? updateProductCartQuantity(product._id, "decrement")
                : null
            }
            className="fa-solid fa-circle-minus fa-lg"
          ></i>
          <span className="product-quantity">{product.qty}</span>
          <i
            onClick={() => updateProductCartQuantity(product._id, "increment")}
            className="fa-solid fa-circle-plus fa-lg"
          ></i>
        </div>
        <div className="card-footer">
          <div className="icon-button-container card-button cart-button-container">
            <button
              onClick={() => removeProductFromCart(product._id)}
              className="btn btn-icon"
            >
              Remove from Cart
            </button>
            {wishlist.find((obj) => obj._id === product._id) ? (
              <button className="btn btn-success btn-go-to-wishlist">
                <Link to="/wishlist">Go To Wishlist</Link>
              </button>
            ) : (
              <button
                onClick={() => addProductToWishlist(product)}
                className="btn"
              >
                Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
