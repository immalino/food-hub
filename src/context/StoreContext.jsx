import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Cart Context
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, value) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: value }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + value }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const increaseCartItem = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const decreaseCartItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] - 1;
      if (updatedCart[itemId] < 1) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Favorite Context

  const [favoriteItems, setFavoriteItems] = useState({});

  const addToFavorite = (itemId) => {
    if (!favoriteItems[itemId]) {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: true }));
    } else {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    addToFavorite,
    increaseCartItem,
    decreaseCartItem,
    favoriteItems,
    setFavoriteItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
