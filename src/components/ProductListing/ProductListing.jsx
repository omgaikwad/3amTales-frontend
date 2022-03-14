import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

const ProductListing = () => {
  return (
    <div className="ProductListing store-container">
      <div className="store-heading-container">
        <h3>Showing All Products</h3>
      </div>
      <ProductCard />
    </div>
  );
};

export default ProductListing;
