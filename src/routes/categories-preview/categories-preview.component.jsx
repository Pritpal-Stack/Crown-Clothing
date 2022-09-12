import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
