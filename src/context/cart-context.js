import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const cartResponse = await axios.get("/api/user/cart", {
          headers: {
            authorization: auth.token,
          },
        });
        setCart(cartResponse.data.cart);
      })();
    } else {
      setCart([]);
    }
  }, [auth]);

  const addProductToCart = async (product) => {
    try {
      const addToCartResponse = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(addToCartResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const removeFromCartResponse = await axios.delete(
        `/api/user/cart/${productId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(removeFromCartResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProductCartQuantity = async (productId, updateType) => {
    try {
      const updateCartQtyResponse = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setCart(updateCartQtyResponse.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        updateProductCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
