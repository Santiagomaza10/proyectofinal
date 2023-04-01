import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.counter, 0);
  };

  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.counter * prod.price , 0);
  };

  const vaciarCarrito = () => {
    setCart([])
  }

  const eliminarDelCarrito = (id) => {
    setCart( cart.filter((prod) => prod.id !== id))
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        isInCart,
        totalCart,
        totalCompra,
        vaciarCarrito,
        eliminarDelCarrito
      }}
    >
        {children}
    </CartContext.Provider>
  );
};
