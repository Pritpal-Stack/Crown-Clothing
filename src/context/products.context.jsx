import PRODUCTS from "../shop-data.json";

const { createContext, useState } = require("react");

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, /*setProducts*/] = useState(PRODUCTS);

  const value = {
    products,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
