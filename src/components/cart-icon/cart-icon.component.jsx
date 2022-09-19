import { CartItemContainer, ItemCart, ShoppingIcon } from  "./cart-icon.styles"; 
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action"
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleHandler = () =>  dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartItemContainer>
      <ShoppingIcon onClick={toggleHandler} ></ShoppingIcon>
      <ItemCart>{cartCount}</ItemCart>
    </CartItemContainer>
  );
};

export default CartIcon;
