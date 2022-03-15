import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
