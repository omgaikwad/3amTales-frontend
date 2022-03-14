import React from "react";
import "./HorizontalProductCard.css";

const HorizontalProductCard = () => {
  return (
    <div className="HorizontalProductCard card-horizontal">
      <div class="card-img-horizontal">
        <img src="/assets/book-images/prisoner-of-birth.jpg" alt="" />
      </div>
      <div class="card-horizontal-content">
        <div class="card-title">
          <h4>A Prisoner of Birth</h4>
        </div>
        <div class="card-description">
          <p>Jeffery Archer</p>
        </div>
        <div class="card-price">
          <span class="sale-price">Rs. 250</span>
          <span class="mrp-price">Rs. 500</span>
          <span class="card-discount">(50%)</span>
        </div>
        <div class="cart-product-quantity">
          <span>Quantity: </span>
          <i class="fa-solid fa-circle-minus"></i>
          <span class="product-quantity">1</span>
          <i class="fa-solid fa-circle-plus"></i>
        </div>
        <div class="card-footer">
          <div class="icon-button-container card-button cart-button-container">
            <button class="btn btn-icon">Remove from Cart</button>
            <button class="btn">Move To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
