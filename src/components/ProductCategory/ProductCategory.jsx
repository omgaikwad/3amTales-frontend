import React from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";
import "./ProductCategory.css";

const ProductCategory = ({ category }) => {
  const { productListState, productListDispatch } = useFilterContext();
  return (
    <div className="ProductCategory category">
      <button
        onClick={() => {
          productListDispatch({
            type: "CATEGORY",
            payload: category.categoryName,
          });
        }}
        className="btn-category-card"
      >
        <Link to="/store">
          <img
            className="category-image"
            src={category.image}
            alt={category.categoryName}
          />
          <p className="category-name">{category.name}</p>
        </Link>
      </button>
    </div>
  );
};

export { ProductCategory };
