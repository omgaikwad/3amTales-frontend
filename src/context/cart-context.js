import { createContext, useContext, useState, useReducer } from "react";

const CartContext = createContext();

const cartListReducerFunc = (cartListState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartListState,
        cartList: [
          ...cartListState.cartList,
          { ...action.payload, cartQuantity: 1 },
        ],
      };

    case "INCREMENT_QUANTITY":
      return {
        ...cartListState,
        cartList: cartListState.cartList.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
            : cartItem
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...cartListState,
        cartList: cartListState.cartList.map((cartItem) =>
          cartItem.id === action.payload.id
            ? {
                ...cartItem,
                cartQuantity:
                  cartItem.cartQuantity > 1
                    ? cartItem.cartQuantity - 1
                    : cartItem.cartQuantity,
              }
            : cartItem
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...cartListState,
        cartList: cartListState.cartList.filter(
          (obj) => obj._id != action.payload._id
        ),
      };
    default:
      return { ...cartListState };
  }
};

const CartContextProvider = ({ children }) => {
  const [cartListState, cartListDispatch] = useReducer(cartListReducerFunc, {
    cartList: [],
  });

  return (
    <CartContext.Provider value={{ cartListState, cartListDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
