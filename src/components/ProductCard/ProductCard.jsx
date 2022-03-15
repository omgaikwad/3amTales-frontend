import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card-vertical">
      <div className="card-img">
        <img src="/assets/book-images/the-krishna-key.jpg" alt="" />
        <span className="card-badge">NEW</span>
        <i className="far fa-heart fa-lg card-heart-icon wishlist-heart card-close"></i>
      </div>
      <div className="card-description-container">
        <div className="card-title">
          <h4>The Krishna Key</h4>
        </div>
        <div className="card-description">
          <p>Ashwin Sanghi</p>
        </div>
        <div className="card-price">
          <span className="sale-price">Rs. 250</span>
          <span className="mrp-price">Rs. 500</span>
          <span className="card-discount">(50%)</span>
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
