import React from "react";
import "./WishlistPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useWishlistContext } from "../../context/wishlist-context";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistState, wishlistDispatch } = useWishlistContext();

  return (
    <div className="WishlistPage">
      {wishlistState.wishlist.length === 0 ? (
        <div className="no-items-in-wishlist-container">
          <h3 className="wishlist-heading">No Items in Wishlist!</h3>
          <button className="btn btn-primary">
            <Link to="/store">Add Products</Link>
          </button>
        </div>
      ) : (
        <div className="wishlist-container">
          <h3 className="wishlist-heading">My Wishlist</h3>
          <div className="wishlist-products-container">
            {wishlistState.wishlist.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
