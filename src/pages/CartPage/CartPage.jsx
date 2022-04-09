import React from "react";
import "./CartPage.css";
import HorizontalProductCard from "../../components/HorizontalProductCard/HorizontalProductCard";
import CartPrice from "../../components/CartPrice/CartPrice";
import { useCartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart, removeProductFromCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="no-items-in-cart-container">
        <h3 className="cart-heading">No Items in the Cart!</h3>
        <button className="btn btn-primary">
          <Link to="/store">Shop Now</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="CartPage">
        <h3 className="cart-heading">MY CART({cart.length})</h3>
        <div className="cart-page-container">
          <div className="cart-horizontal-card-container">
            {cart.map((product) => {
              return (
                <HorizontalProductCard product={product} key={product._id} />
              );
            })}
          </div>
          <CartPrice />
        </div>
      </div>
    );
  }
};

export default CartPage;
