import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./HorizontalProductCard.css";

const HorizontalProductCard = ({ product }) => {
  const { cartListState, cartListDispatch } = useCartContext();
  const { wishlistState, wishlistDispatch } = useWishlistContext();

  return (
    <div className="HorizontalProductCard card-horizontal">
      <div class="card-img-horizontal">
        <img src={product.image} alt="" />
      </div>
      <div class="card-horizontal-content">
        <div class="card-title">
          <h4> {product.title} </h4>
        </div>
        <div class="card-description">
          <p> {product.author} </p>
        </div>
        <div class="card-price">
          <span class="sale-price">Rs. {product.discountPrice}</span>
          <span class="mrp-price">Rs. {product.mrpPrice}</span>
          <span class="card-discount">({product.discountPercent}%)</span>
        </div>
        <div class="cart-product-quantity">
          <span>Quantity: </span>
          <i
            onClick={() =>
              cartListDispatch({ type: "DECREMENT_QUANTITY", payload: product })
            }
            class="fa-solid fa-circle-minus fa-lg"
          ></i>
          <span class="product-quantity">{product.cartQuantity}</span>
          <i
            onClick={() =>
              cartListDispatch({ type: "INCREMENT_QUANTITY", payload: product })
            }
            class="fa-solid fa-circle-plus fa-lg"
          ></i>
        </div>
        <div class="card-footer">
          <div class="icon-button-container card-button cart-button-container">
            <button
              onClick={() =>
                cartListDispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
              class="btn btn-icon"
            >
              Remove from Cart
            </button>
            {wishlistState.wishlist.find((obj) => obj._id === product._id) ? (
              <button class="btn btn-success btn-go-to-wishlist">
                <Link to="/wishlist">Go To Wishlist</Link>
              </button>
            ) : (
              <button
                onClick={() =>
                  wishlistDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                  })
                }
                class="btn"
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
