import React from "react";
import { useCartContext } from "../../context/cart-context";
import "./CartPrice.css";

const CartPrice = () => {
  const { cartListState, cartListDispatch } = useCartContext();

  const cartTotalPrice = cartListState.cartList.reduce(
    (acc, curr) => acc + parseInt(curr.discountPrice) * curr.cartQuantity,
    0
  );

  const cartTotalMrpPrice = cartListState.cartList.reduce(
    (acc, curr) => acc + parseInt(curr.mrpPrice) * curr.cartQuantity,
    0
  );

  const cartTotalDiscount = cartTotalMrpPrice - cartTotalPrice;

  return (
    <div className="CartPrice cart-price-container">
      <h4>PRICE DETAILS</h4>
      <hr />
      <div class="cart-price">
        <p>MRP Price ({cartListState.cartList.length} items)</p>
        <p>Rs. {cartTotalMrpPrice}</p>
      </div>
      <div class="cart-discount">
        <p>Discount</p>
        <p>- Rs. {cartTotalDiscount}</p>
      </div>
      <div class="cart-delivery-charges">
        <p>Delivery Charges</p>
        <p>Rs.0</p>
      </div>
      <hr />
      <div class="cart-total-amount">
        <p>GRAND TOTAL</p>
        <p>Rs. {cartTotalPrice}</p>
      </div>
      <hr />

      <p>You will save Rs. {cartTotalDiscount} on this order.</p>
      <button class="cart-place-order-btn btn btn-primary">PLACE ORDER</button>
    </div>
  );
};

export default CartPrice;
