import "./directive-item.styles.scss";
import { useParams } from "react-router-dom";
import ProductCart from "../../components/product-cart/product-cart.component";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";

import Spinner from "../../components/spinner/spinner.component";

const DirectiveItem = () => {
  const { category } = useParams();

  const categoryMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1>{category.toUpperCase()}</h1>
          <div className="directive-item-container">
            {products && products.map((product) => <ProductCart key={product.id} product={product} />)}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DirectiveItem;
