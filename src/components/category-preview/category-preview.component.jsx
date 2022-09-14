import "./category-preview-styles.scss";
import { Link } from "react-router-dom";
import React from "react";
import ProductCart from "../product-cart/product-cart.component";

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title} >{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
