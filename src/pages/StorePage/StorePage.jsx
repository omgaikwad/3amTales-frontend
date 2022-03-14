import React from "react";
import "./StorePage.css";
import ProductListing from "../../components/ProductListing/ProductListing";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";

const StorePage = () => {
  return (
    <div className="StorePage store-main-body">
      <SidebarFilter />
      <ProductListing />
    </div>
  );
};

export default StorePage;
