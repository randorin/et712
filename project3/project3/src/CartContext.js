import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => {
      const gameInCart = prevCart.find((item) => item.id === game.id);
      
      if (gameInCart) {
        return prevCart.map((item) => 
          item.id === game.id 
          ? { ...item, quantity: item.quantity + game.quantity }
          : item
        );
      } else {
        return [...prevCart, { ...game, quantity: game.quantity }];
      }
    });
  };

  const removeFromCart = (gameId) => {
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
