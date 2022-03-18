import { createContext, useContext, useEffect, useState } from "react";
const { default: axios } = require("axios");

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProductList(response.data.products);
      } catch (err) {
        console.log("error from catch", err);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductContextProvider };
