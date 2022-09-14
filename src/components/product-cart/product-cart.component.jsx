import { useContext } from "react";

import Button, {BUTTON_TYPE} from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import "./product-cart.styles.scss";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemsToCart } = useContext(CartContext);
  const addProductToCart = () => { return addItemsToCart(product)}

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCart;
