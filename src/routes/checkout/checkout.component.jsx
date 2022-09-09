import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemsToCart } = useContext(CartContext);

  return (
    <div className="checkout-container" >
      <div className="checkout-header">
        <div className="header-block" ><span>Product</span></div>
        <div className="header-block" ><span>Description</span></div>
        <div className="header-block" ><span>Quantity</span></div>
        <div className="header-block" ><span>Price</span></div>
        <div className="header-block" ><span>Remove</span></div>
      </div> 
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={()=>{ removeItemsToCart(cartItem) }} >decrement</span>
              <br />
              <span onClick={()=>{ addItemsToCart(cartItem) }} >increment</span>
            </div>
          )
        })}
        <span className="Total" >Total: 0</span>
      </div> 
  );
};

export default Checkout;
