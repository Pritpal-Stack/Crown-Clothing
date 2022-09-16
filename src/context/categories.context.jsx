// import { SHOP_DATA } from "../shop-data";
import { getCategoryAndDocuments /*addCollectionAndDocuments*/ } from "../utils/firebase/firebase.utils.js";

const { createContext, useState, useEffect } = require("react");

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  
  useEffect(() => { 
    const getCategoryMap = async () => {
      const categoryMap = await getCategoryAndDocuments(); 
      setCategoryMap(categoryMap)
    };
    getCategoryMap();
  }, []); 

  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA) // for adding data to firestore
  // },[])

  const value = {
    categoryMap,
  };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
