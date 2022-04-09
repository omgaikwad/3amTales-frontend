import React from "react";
import { useCartContext } from "../../context/cart-context";
import "./CartPrice.css";

const CartPrice = () => {
  const { cart } = useCartContext();

  const cartTotalPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.discountPrice) * curr.qty,
    0
  );

  const cartTotalMrpPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.mrpPrice) * curr.qty,
    0
  );

  const cartTotalDiscount = cartTotalMrpPrice - cartTotalPrice;

  return (
    <div className="CartPrice cart-price-container">
      <h4>PRICE DETAILS</h4>
      <hr />
      <div className="cart-price">
        <p>MRP Price ({cart.length} items)</p>
        <p>Rs. {cartTotalMrpPrice}</p>
      </div>
      <div className="cart-discount">
        <p>Discount</p>
        <p>- Rs. {cartTotalDiscount}</p>
      </div>
      <div className="cart-delivery-charges">
        <p>Delivery Charges</p>
        <p>Rs.0</p>
      </div>
      <hr />
      <div className="cart-total-amount">
        <p>GRAND TOTAL</p>
        <p>Rs. {cartTotalPrice}</p>
      </div>
      <hr />

      <p>You will save Rs. {cartTotalDiscount} on this order.</p>
      <button className="cart-place-order-btn btn btn-primary">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CartPrice;
