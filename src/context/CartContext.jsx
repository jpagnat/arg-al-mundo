import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState();

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
    setCart(
      cart.filter((producst) => parseInt(producst.item.id) !== parseInt(itemId))
    );
    console.log("Item eliminado", cart);
  };

  //Remueve todos los items del carrito
  const clearCart = () => {
    setCart([]);
    setCountCart(0);
    console.log(cart);
  };

  //Actualiza el carrito
  const updateCart = (obj) => {
    cart.push(obj);
  };

  //Comprueba si el elemento ya existe en el carrito
  const isInCart = (itemId) => {
    return cart.find((obj) => obj.item.id === itemId) ? true : false;
  };

  //Contador del carrito
  const contadorCarrito = () => {
    let total = 0;
    if (cart.length > 0) {
      cart.forEach((product) => {
        total += product.quantity;
      });
    }
    setCountCart(total);
  };

  useEffect(() => {
    contadorCarrito();
    console.log(countCart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        removeItem,
        countCart,
        contadorCarrito,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
