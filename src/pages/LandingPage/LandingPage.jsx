import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
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
        <div className="category">
          <a href="">
            <img
              src="/assets/book-images/origin-danBrown.jpg"
              alt="crime-mystery-thrillers"
            />
            <p className="category-description">Crime, Mystery and Thrillers</p>
          </a>
        </div>
        <div className="category">
          <a href="">
            <img
              src="/assets/book-images/immortals-of-meluha.jpg"
              alt="myths-legends-sagas"
            />
            <p className="category-description">Myths, Legends and Sagas</p>
          </a>
        </div>
        <div className="category">
          <a href="">
            <img
              src="/assets/book-images/the-magic-drums.jpg"
              alt="indian-storytellers"
            />
            <p className="category-description">Childrens</p>
          </a>
        </div>
        <div className="category">
          <a href="">
            <img
              src="/assets/book-images/the-krishna-key.jpg"
              alt="action-adventure"
            />
            <p className="category-description">Action and Adventure</p>
          </a>
        </div>

        <div className="category">
          <a href="">
            <img
              src="/assets/book-images/the-alchemist.jpg"
              alt="fantasy-fiction"
            />
            <p className="category-description">Fantasy Fiction</p>
          </a>
        </div>
        <div className="category">
          <a href="">
            <img src="/assets/book-images/sapiens.jpg" alt="non-fiction" />
            <p className="category-description">Non-Fiction</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
