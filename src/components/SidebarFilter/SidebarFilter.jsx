import React from "react";
import "./SidebarFilter.css";

const SidebarFilter = () => {
  return (
    <div className="SidebarFilter filter-container">
      <div className="filter-heading">
        <h3>FILTERS</h3>
        <a href="" className="btn-link">
          Clear
        </a>
      </div>
      <div className="filter-price-container">
        <h3>Price</h3>
        <div className="price-range-span">
          <span>₹100</span>
          <span>₹200</span>
          <span>₹300</span>
          <span>₹400</span>
        </div>
        <input
          type="range"
          name=""
          id="price-range-slider"
          min="100"
          max="400"
          step="100"
          className="filter-price-slider"
        />
      </div>
      <div className="filter-category-container">
        <h3>Category</h3>
        <label for="filter-men-clothing">
          <input type="checkbox" name="" className="filter-category-checkbox" />
          Fiction Books
        </label>
        <label for="filter-women-clothing">
          <input type="checkbox" name="" className="filter-category-checkbox" />
          Non-Fiction Books
        </label>
      </div>
      <div className="filter-rating-container">
        <h3>Rating</h3>
        <label for="rating-4star">
          <input type="radio" name="rating" id="rating-4star" />4 Stars and
          above
        </label>
        <label for="rating-3star">
          <input type="radio" name="rating" id="rating-3star" />3 Stars and
          above
        </label>
        <label for="rating-2star">
          <input type="radio" name="rating" id="rating-2star" />2 Stars and
          above
        </label>
        <label for="rating-1star">
          <input type="radio" name="rating" id="rating-1star" />1 Stars and
          above
        </label>
      </div>
      <div className="filter-sort-by">
        <h3>Sort by</h3>
        <label for="price-low-to-high">
          <input type="radio" name="sort-by" id="price-low-to-high" />
          Price - Low to High
        </label>
        <label for="price-high-to-low">
          <input type="radio" name="sort-by" id="price-high-to-low" />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};

export default SidebarFilter;
