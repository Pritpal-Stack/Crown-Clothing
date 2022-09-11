import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import ProductCart from '../../components/product-cart/product-cart.component';

import './shop.style.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} product={product}></ProductCart>
      ))}
    </div>
  );
};

export default Shop;
