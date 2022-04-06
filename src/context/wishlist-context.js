import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const wishlistResponse = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: auth.token,
          },
        });
        setWishlist(wishlistResponse.data.wishlist);
      })();
    } else {
      setWishlist([]);
    }
  }, [auth]);

  const addProductToWishlist = async (product) => {
    try {
      const addToWishlistResponse = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWishlist(addToWishlistResponse.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      const removeFromWishlistResponse = await axios.delete(
        `/api/user/wishlist/${productId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWishlist(removeFromWishlistResponse.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { useWishlistContext, WishlistContextProvider };
