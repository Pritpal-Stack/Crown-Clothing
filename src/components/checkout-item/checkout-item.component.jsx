import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemsFromCart, removeItemsToCart, addItemsToCart } = useContext(CartContext);
  const cleanCartItemHandler = () =>  clearItemsFromCart(cartItem); 
  const addCartItemHandler = () =>  addItemsToCart(cartItem); 
  const removeCartItemHandler = () =>  removeItemsToCart(cartItem); 

  

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={addCartItemHandler} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={removeCartItemHandler} >&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleanCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
