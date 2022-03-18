const { default: axios } = require("axios");
const { createContext, useState, useContext, useEffect } = require("react");

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategoryList(response.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => useContext(CategoryContext);

export { CategoryContextProvider, useCategoryContext };
