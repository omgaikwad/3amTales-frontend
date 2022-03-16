import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const axios = require("axios").default;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProductList(response.data.products));
  }, []);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
