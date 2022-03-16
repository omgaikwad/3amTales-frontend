import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";
import { useFilterContext } from "../../context/filter-context";
import { useProductContext } from "../../context/product-context";

const ProductListing = () => {
  const { productListState, productListDispatch } = useFilterContext();
  const { productList, setProductList } = useProductContext();

  const sortByPrice = (products, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return products.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (sortBy === "LOW_TO_HIGH") {
      return products.sort((a, b) => a.discountPrice - b.discountPrice);
    }
    return products;
  };

  const filterByCategory = (products, category) => {
    if (category.length !== 0) {
      return products.filter((item) => category.includes(item.categoryName));
    }
    return products;
  };

  const filterByRating = (products, rating) => {
    return products.filter((obj) => obj.rating >= parseInt(rating));
  };

  const filteredProductList = filterByRating(
    filterByCategory(
      sortByPrice([...productList], productListState.sortBy),
      productListState.category
    ),
    productListState.rating
  );

  return (
    <div className="ProductListing store-container">
      <div className="store-heading-container">
        <h3>Store</h3>
      </div>
      <div className="products-container">
        {filteredProductList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListing;
