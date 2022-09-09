import { ReactComponent as ShoppingIcon } from "../../assets/logos/shopping-bag.svg";
import { useContext } from "react";
import "./cart-icon.styles.scss";
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {

  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleHandler = () =>  setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleHandler} ></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
