import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  const addProductToCart = async (product) => {};

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const cartResponse = await axios.get("/api/user/cart", {
          headers: {
            authorization: auth.token,
          },
        });
        console.log(cartResponse);
      })();
    } else {
      setCart([]);
    }
  }, [auth]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
