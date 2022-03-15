import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";
import { useState, useEffect } from "react";
import { useFilter } from "../../context/filter-context";

const ProductListing = () => {
  const axios = require("axios").default;
  const [productList, setProductList] = useState([]);

  const { productListState, productListDispatch } = useFilterContext();

  const sortData = (products, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return products.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (sortBy === "LOW_TO_HIGH") {
      return products.sort((a, b) => a.discountPrice - b.discountPrice);
    } else {
      return products;
    }
  };

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProductList(response.data.products));
  }, []);

  return (
    <div className="ProductListing store-container">
      <div className="store-heading-container">
        <h3>Showing All Products</h3>
      </div>
      <div className="products-container">
        {productList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListing;
