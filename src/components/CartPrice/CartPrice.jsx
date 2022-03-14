import React from "react";
import "./CartPrice.css";

const CartPrice = () => {
  return (
    <div className="CartPrice cart-price-container">
      <h4>PRICE DETAILS</h4>
      <hr />
      <div class="cart-price">
        <p>Price (1 item)</p>
        <p>Rs.500</p>
      </div>
      <div class="cart-discount">
        <p>Discount</p>
        <p>- Rs.250</p>
      </div>
      <div class="cart-delivery-charges">
        <p>Delivery Charges</p>
        <p>Rs.50</p>
      </div>
      <hr />
      <div class="cart-total-amount">
        <p>TOTAL AMOUNT</p>
        <p>Rs.300</p>
      </div>
      <hr />

      <p>You will save Rs.250 on this order.</p>
      <button class="cart-place-order-btn btn btn-primary">PLACE ORDER</button>
    </div>
  );
};

export default CartPrice;
