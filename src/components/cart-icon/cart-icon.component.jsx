 import { useContext } from "react";
import { CartItemContainer, ItemCart, ShoppingIcon } from  "./cart-icon.styles";
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {

  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleHandler = () =>  setIsCartOpen(!isCartOpen);

  return (
    <CartItemContainer>
      <ShoppingIcon onClick={toggleHandler} ></ShoppingIcon>
      <ItemCart>{cartCount}</ItemCart>
    </CartItemContainer>
  );
};

export default CartIcon;
