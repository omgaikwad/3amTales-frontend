import React from "react";
import "./WishlistPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const WishlistPage = () => {
  return (
    <div className="WishlistPage">
      <h1 className="wishlist-heading">My Wishlist</h1>
      <div className="wishlist-container">
        <ProductCard />
      </div>
    </div>
  );
};

export default WishlistPage;
