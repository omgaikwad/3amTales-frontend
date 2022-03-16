import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./context/filter-context";
import { ProductContextProvider } from "./context/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FilterContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
