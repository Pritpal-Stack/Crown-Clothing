import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE} from "../button/button.component"; 
import "./product-cart.styles.scss";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
 
  const addProductToCart = () => dispatch(addItemsToCart(cartItems, product))

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
