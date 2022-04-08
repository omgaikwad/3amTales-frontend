import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { useCartContext } from "../../context/cart-context";
import { useProductContext } from "../../context/product-context";
import { useWishlistContext } from "../../context/wishlist-context";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const { productList } = useProductContext();
  const { cart, addProductToCart } = useCartContext();
  const { wishlist, addProductToWishlist } = useWishlistContext();
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  const product = productList.find((product) => product._id === productId);

  return (
    <div className="ProductPage">
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.image} alt="" />
        </div>
        <div className="product-details-container">
          <div className="product-name card-title">{product.title}</div>
          <div className="product-author card-description">
            {product.author}
          </div>
          <div className="card-price product-card-price">
            <span className="sale-price">Rs. {product.discountPrice} </span>
            <span className="mrp-price">Rs. {product.mrpPrice}</span>
            <span className="card-discount">({product.discountPercent}%)</span>
            <span className="card-rating">
              {product.rating}
              <i className="fa-solid fa-star fa-sm"></i>
            </span>
          </div>

          <div className="card-button product-button-container">
            {/* Add to Cart Button */}
            {cart.find((cartItem) => cartItem._id === product._id) ? (
              <button className="btn btn-success move-to-cart">
                <Link to="/cart">Go To Cart</Link>
              </button>
            ) : (
              <button
                onClick={() => {
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

            {/* Add to Wishlist Button */}
            {wishlist.find((obj) => obj._id === product._id) ? (
              <button className="btn btn-success move-to-cart">
                <Link to="/wishlist">Go To Wishlist</Link>
              </button>
            ) : (
              <button
                onClick={() => {
                  auth.isLoggedIn
                    ? addProductToWishlist(product)
                    : navigate("/login");
                }}
                className="btn btn-outline-primary add-to-cart"
              >
                Add to Wishlist
              </button>
            )}
          </div>
          <div className="product-book-description">{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
