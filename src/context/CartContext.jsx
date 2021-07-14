import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [countCart, setCountCart] = useState();
  const [totalPrice, setTotalPrice] = useState();

  //Agregar cierta cantidad de un item al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.slice();
      const element = cart.find((obj) => obj.item.id === item.id);
      element.quantity += quantity;
      setCart(newCart);
    } else {
      updateCart({ item, quantity });
    }
  };

  //Remueve un item del carrito utilizando su id
  const removeItem = (itemId) => {
    setCart(
      cart.filter((product) => parseInt(product.item.id) !== parseInt(itemId))
    );
    console.log("Se ha eliminado: ", cart.item);
  };

  //Remueve todos los items del carrito
  const clearCart = () => {
    setCart([]);
    setCountCart(0);
    setTotalPrice(0);
    console.log("Carrito vaciado");
  };

  //Comprueba si el elemento ya existe en el carrito
  const isInCart = (itemId) => {
    return cart.find((obj) => obj.item.id === itemId) ? true : false;
  };

  //Actualizar el carrito
  const updateCart = (obj) => {
    setCart([...cart, obj]);
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
  //Monto total a abonar
  const sumarPrecioCarrito = () => {
    let total = 0;
    if (cart.length > 0) {
      cart.forEach((product) => {
        total += product.item.price * product.quantity;
      });
    }
    setTotalPrice(total);
  };

  //Actualizar cantidad y monto
  useEffect(() => {
    contadorCarrito();
    sumarPrecioCarrito();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        removeItem,
        countCart,
        contadorCarrito,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
