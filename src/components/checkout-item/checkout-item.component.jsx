import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemsToCart, clearItemsFromCart, removeItemsToCart } from "../../store/cart/cart.action"

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const cleanCartItemHandler = () =>  dispatch(clearItemsFromCart(cartItems, cartItem)) 
  const addCartItemHandler = () =>  dispatch(addItemsToCart(cartItems, cartItem)); 
  const removeCartItemHandler = () =>  dispatch(removeItemsToCart(cartItems, cartItem)); 

  
 
  return (
    <div className="checkout-item-container">
      <div className="image-container"> 
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItemHandler} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItemHandler} >&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleanCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
