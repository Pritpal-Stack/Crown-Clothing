const { createContext, useState, useEffect } = require("react");

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cardCount : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);

  useEffect(()=>{
    const newCartCount = cartItems.reduce((total, cartItem)=>( total + cartItem.quantity ), 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const addItemsToCart = (addItemToAdd) => {
    setCartItems(addCartItem(cartItems, addItemToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
