import { Fragment,   } from "react"; 
import { useSelector } from "react-redux"; 
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";



import "./categories-preview.styles.scss";

const CategoriesPreview = () => { 

  const categoryMap = useSelector(selectCategoriesMap); 
 
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
