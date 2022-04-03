import React from "react";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="ProductPage">
      <div className="product-container">
        <div className="product-image-container">
          <img src="/assets/book-images/sapiens.jpg" alt="" />
        </div>
        <div className="product-details-container">
          <div className="product-name card-title">
            The Magic Drums and other Favourite Stories
          </div>
          <div className="product-author card-description">Sudha Murty</div>
          <div className="card-price product-card-price">
            <span className="sale-price">Rs. 110</span>
            <span className="mrp-price">Rs. 250</span>
            <span className="card-discount">(20%)</span>
            <span className="card-rating">
              {4}
              <i className="fa-solid fa-star fa-sm"></i>
            </span>
          </div>

          <div className="card-button product-button-container">
            <button className="btn btn-icon add-to-cart">
              <i className="fas fa-shopping-cart"></i>
              Add to Cart
            </button>
            <button className="btn btn-outline-primary add-to-cart">
              <i className="far fa-heart fa-lg"></i>
              Add to Wishlist
            </button>
          </div>
          <div className="product-book-description">
            Kings and misers, princes and paupers, wise men and foolish boys,
            the funniest and oddest men and women come alive in this sparkling
            new collection of stories. The clever princess will only marry the
            man who can ask her a question she cannot answer; the orphan boy
            outwits his greedy uncles with a bag of ash; and an old couple in
            distress is saved by a magic drum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
