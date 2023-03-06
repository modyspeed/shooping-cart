import { createContext, useState, useContext, useEffect } from "react";
import { Cart } from "../Cart";
import items from "../data/Items..json";
const shoopingContext = createContext({});
export const ContextProvider = ({ children }) => {
  const initialState = localStorage.getItem("shooping-cart")
    ? JSON.parse(localStorage.getItem("shooping-cart"))
    : [];
  const [cartItems, setCartItems] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("shooping-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const [show, setShow] = useState(false);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const totalPrice = cartItems.reduce((total, cartItems) => {
    const item = items.find((i) => i.id === cartItems.id);

    return total + (item?.price || 0) * cartItems.quantity;
  }, 0);
  const getQuantityItems = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseItemsInCart = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseItemsInCart = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <shoopingContext.Provider
      value={{
        cartItems,
        getQuantityItems,
        increaseItemsInCart,
        decreaseItemsInCart,
        removeItemFromCart,
        show,
        handleClose,
        handleShow,
        cartQuantity,
        totalPrice,
      }}
    >
      {children}
      {<Cart />}
    </shoopingContext.Provider>
  );
};
export const useShoopingCart = () => {
  return useContext(shoopingContext);
};
