import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  console.log(product);

  return (
    <CartContext.Provider value={[product, setProduct]}>
      {children}
    </CartContext.Provider>
  );
};
