import "./category.styles.scss";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCart from "../../components/product-cart/product-cart.component";

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <div className="category-container-in-preview">
      {products && products.map((product) => <ProductCart key={product.id} product={product} />)}
    </div>
  );
};

export default Category;
