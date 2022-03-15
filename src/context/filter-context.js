import { useContext, createContext, useReducer } from "react";

const FilterContext = createContext();

const productListReducerFunc = (productListState, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...productListState, sortBy: action.payload };
    case "PRICE_RANGE":
      return { ...productListState, priceRange: action.payload };
    case "RATINGS":
      return { ...productListState, ratings: action.payload };
    case "CATEGORY":
      return { ...productListState, category: action.payload };
    default:
      return { sortBy: "", priceRange: "0", ratings: "", category: "" };
  }
};

const FilterContextProvider = ({ children }) => {
  const [productListState, productListDispatch] = useReducer(
    productListReducerFunc,
    {
      sortBy: "",
      priceRange: "0",
      ratings: "",
      category: "",
    }
  );

  return (
    <FilterContext.Provider value={{ productListState, productListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilter };
