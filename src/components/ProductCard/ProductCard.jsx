import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card-vertical">
      <div className="card-img">
        <img src={product.image} alt="" />
        <span className="card-badge">NEW</span>
        <i className="far fa-heart fa-lg card-heart-icon wishlist-heart card-close"></i>
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
        </div>
        <div className="card-footer">
          <div className="icon-button-container card-button">
            <button className="btn btn-icon move-to-cart">
              <i className="fas fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
