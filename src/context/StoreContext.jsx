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

  // Favorite Context

  const [favoriteItems, setFavoriteItems] = useState({});

  const addToFavorite = (itemId) => {
    if (!favoriteItems[itemId]) {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: true }));
    } else {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  // History Context

  const [orderHistory, setOrderHistory] = useState([]);

  const addOrderToHistory = (item, total, money) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthAbbreviation = monthAbbreviations[currentDate.getMonth()];
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const id = `${hour < 10 ? "0" + hour : hour}${minute < 10 ? "0" + minute : minute}${second < 10 ? "0" + second : second}`;

    const newItem = {
      id: id,
      date: `${day < 10 ? "0" + day : day} ${monthAbbreviation}, ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`,
      item: item,
      total: total,
      money: money,
    };

    setOrderHistory((prev) => [...prev, newItem]);
  };

  useEffect(() => {
    console.log(cartItems);
    console.log(orderHistory);
  }, [cartItems, orderHistory]);

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
    orderHistory,
    addOrderToHistory,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
