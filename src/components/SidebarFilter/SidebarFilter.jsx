import React from "react";
import { useFilterContext } from "../../context/filter-context";
import "./SidebarFilter.css";

const SidebarFilter = () => {
  const { productListState, productListDispatch } = useFilterContext();

  return (
    <div className="SidebarFilter filter-container">
      <div className="filter-heading">
        <h3>FILTERS</h3>
        <btn
          className="btn-link btn-clear-filter"
          onClick={() => productListDispatch({ type: "" })}
        >
          Clear
        </btn>
      </div>
      <div className="filter-price-container">
        <h3>Ratings</h3>
        <div className="price-range-span">
          <span>
            1<i className="fa-solid fa-star"></i>
          </span>
          <span>
            2<i className="fa-solid fa-star"></i>
          </span>
          <span>
            3<i className="fa-solid fa-star"></i>
          </span>
          <span>
            4<i className="fa-solid fa-star"></i>
          </span>
          <span>
            5<i className="fa-solid fa-star"></i>
          </span>
        </div>
        <input
          type="range"
          name=""
          id="price-range-slider"
          min="1"
          max="5"
          step="1"
          className="filter-price-slider"
          onChange={(e) =>
            productListDispatch({ type: "RATING", payload: e.target.value })
          }
          value={productListState.rating}
        />
      </div>

      <div className="filter-sort-by">
        <h3>Sort by</h3>
        <label for="price-low-to-high">
          <input
            type="radio"
            name="sort-by"
            id="price-low-to-high"
            onChange={() =>
              productListDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
            }
          />
          Price - Low to High
        </label>
        <label for="price-high-to-low">
          <input
            type="radio"
            name="sort-by"
            id="price-high-to-low"
            onChange={() =>
              productListDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
            }
          />
          Price - High to Low
        </label>
      </div>

      <div className="filter-category-container">
        <h3>Category</h3>
        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes("myths-legends-sagas")}
            onChange={() =>
              productListDispatch({
                type: "CATEGORY",
                payload: "myths-legends-sagas",
              })
            }
          />
          Myths Legends and Sagas
        </label>
        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes(
              "crime-mystery-thriller"
            )}
            onChange={() =>
              productListDispatch({
                type: "CATEGORY",
                payload: "crime-mystery-thriller",
              })
            }
          />
          Crime Mystery and Thriller
        </label>

        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes("non-fiction")}
            onChange={() =>
              productListDispatch({ type: "CATEGORY", payload: "non-fiction" })
            }
          />
          Non-Fiction
        </label>

        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes("fantasy-fiction")}
            onChange={() =>
              productListDispatch({
                type: "CATEGORY",
                payload: "fantasy-fiction",
              })
            }
          />
          Fantasy Fiction
        </label>
        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes("action-adventure")}
            onChange={() =>
              productListDispatch({
                type: "CATEGORY",
                payload: "action-adventure",
              })
            }
          />
          Action Adventure
        </label>
        <label>
          <input
            type="checkbox"
            name=""
            className="filter-category-checkbox"
            checked={productListState.category.includes("childrens")}
            onChange={() =>
              productListDispatch({ type: "CATEGORY", payload: "childrens" })
            }
          />
          Childrens
        </label>
      </div>
    </div>
  );
};

export default SidebarFilter;
