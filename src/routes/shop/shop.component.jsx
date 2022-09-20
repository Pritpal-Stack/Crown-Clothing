// React
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action"; 
// Components
import CategoriesPreview from "../categories-preview/categories-preview.component";
import DirectiveItem from "../Directory/directive-item.component";
//Css
import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    // dispatch won't change;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<DirectiveItem />} />
    </Routes>
  );
};

export default Shop;
