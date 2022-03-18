import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { useCategoryContext } from "../../context/category-context";

const LandingPage = () => {
  const { categoryList, setCategoryList } = useCategoryContext();

  return (
    <div className="LandingPage">
      <section className="main-banner">
        <img
          src="/assets/images/banner.jpg"
          alt="main-banner"
          className="banner-img"
        />
        <div className="banner-content-on-top">
          <p className="banner-description">
            Explore wide genres of Books for all of your 3AM cravings.
          </p>
          <button className="btn btn-primary">
            <Link to="/store">Shop Now</Link>
          </button>
        </div>
      </section>

      <h2 className="category-heading">Genre</h2>
      <section className="category-container">
        {categoryList.map((obj) => {
          return <ProductCategory category={obj} />;
        })}
      </section>
    </div>
  );
};

export default LandingPage;
