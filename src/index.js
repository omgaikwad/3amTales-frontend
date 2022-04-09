import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./context/filter-context";
import { ProductContextProvider } from "./context/product-context";
import { CartContextProvider } from "./context/cart-context";
import { WishlistContextProvider } from "./context/wishlist-context";
import { CategoryContextProvider } from "./context/category-context";
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <FilterContextProvider>
              <CategoryContextProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CategoryContextProvider>
            </FilterContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
