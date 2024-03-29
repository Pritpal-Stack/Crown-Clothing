import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {
        cartItems.length ? (
        cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) ) : ( <EmptyMessage>Your cart is empty</EmptyMessage> )
        }
      </CartItems>
      <Button onClick={goToCheckout}>CheckOut</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
