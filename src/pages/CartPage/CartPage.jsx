import React from "react";
import "./CartPage.css";
import HorizontalProductCard from "../../components/HorizontalProductCard/HorizontalProductCard";
import CartPrice from "../../components/CartPrice/CartPrice";

const CartPage = () => {
  return (
    <div className="CartPage">
      <h3 class="cart-heading">MY CART(1)</h3>
      <div className="cart-page-container">
        <HorizontalProductCard />
        <CartPrice />
      </div>
    </div>
  );
};

export default CartPage;
