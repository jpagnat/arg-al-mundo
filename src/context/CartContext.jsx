import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agregar cierta cantidad de un item al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const element = cart.find((obj) => obj.item.id === item.id);
      element.quantity += quantity;
    } else {
      updateCart({ item, quantity });
    }
  };

  //Remueve un item del carrito utilizando su id
  const removeItem = (itemId) => {
    const newCart = cart.slice();
    const filterCart = newCart.filter((obj) => obj.item.id !== itemId);
    setCart(filterCart);
  };

  //Remueve todos los items del carrito
  const clearCart = () => {
    setCart([]);
  };

  //Actualiza el carrito
  const updateCart = (obj) => {
    cart.push(obj);
  };

  //Comprueba si el elemento ya existe en el carrito
  const isInCart = (itemId) => {
    return cart.find((obj) => obj.item.id === itemId) ? true : false;
  };

  return (
    <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
  );
};
