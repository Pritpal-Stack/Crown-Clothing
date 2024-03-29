import "./directive-item.styles.scss";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCart from "../../components/product-cart/product-cart.component";
import { Fragment } from "react";

const DirectiveItem = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
      <h1>{category.toUpperCase()}</h1>
      <div className="directive-item-container">
        {products && products.map((product) => <ProductCart key={product.id} product={product} />)}
      </div>
    </Fragment>
  );
};

export default DirectiveItem;
