import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemsToCart } = useContext(CartContext);

  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Checkout;
