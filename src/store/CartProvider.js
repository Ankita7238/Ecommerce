import React, { useState, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";
import { addProductToCart, getCartItems, updateProductInCart } from "./api"; 

const ContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (authCtx.email) {
        const items = await getCartItems(authCtx.email);
        setCartItems(items);
      }
    };
    fetchCartItems();
  }, [authCtx.email]);

  const addToCartHandler = async (cartItemToAdd) => {
    if (!authCtx.email) {
      return; 
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === cartItemToAdd.title
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + Number(cartItemToAdd.quantity),
      };
      setCartItems(updatedCart);

      const productToUpdate = updatedCart[existingItemIndex];
      await updateProductInCart(authCtx.email, productToUpdate); 
    } else {
      const newCartItem = { ...cartItemToAdd, quantity: Number(cartItemToAdd.quantity) };
      const updatedCart = [...cartItems, newCartItem];
      setCartItems(updatedCart);

      await addProductToCart(authCtx.email, newCartItem);
    }
  };

  const onCartVisibleHandler = () => {
    setIsCartVisible((prev) => !prev);
  };

  const cartDetails = {
    isCartVisible: isCartVisible,
    onVisible: onCartVisibleHandler,
    cartItem: cartItems,
    onAddItem: addToCartHandler,
  };

  return (
    <CartContext.Provider value={cartDetails}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
