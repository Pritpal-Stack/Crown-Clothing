import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component"; 
import DirectiveItem from "../Directory/directive-item.component";
import "./shop.style.scss";

const Shop = () => { 

  return ( 
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<DirectiveItem />} />
    </Routes>
  )
};

export default Shop;
