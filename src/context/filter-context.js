import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();

const productListReducerFunc = (productListState, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...productListState, sortBy: action.payload };
    case "PRICE_RANGE":
      return { ...productListState, priceRange: action.payload };
    case "RATING":
      return { ...productListState, rating: action.payload };
    case "CATEGORY":
      return {
        ...productListState,
        category: productListState.category.includes(action.payload)
          ? productListState.category.filter(
              (value) => value !== action.payload
            )
          : [...productListState.category, action.payload],
      };
    default:
      return {
        sortBy: null,
        rating: "1",
        category: [],
      };
  }
};

const FilterContextProvider = ({ children }) => {
  const [productListState, productListDispatch] = useReducer(
    productListReducerFunc,
    {
      sortBy: null,
      rating: "1",
      category: [],
    }
  );

  return (
    <FilterContext.Provider value={{ productListState, productListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
