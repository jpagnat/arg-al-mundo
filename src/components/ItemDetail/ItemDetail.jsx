import React, { useState, useContext } from "react";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/itemCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const [stock, setStock] = useState(item.stock);
  const [itemCount, setItemCount] = useState(1);
  const [state, setState] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const [product, setProduct] = useContext(CartContext);

  //Agregar producto al carrito
  const onAdd = () => {
    const getItem = () => {
      return product.find((prod) => prod.id === item.id);
    };
    const prod = getItem();

    if (product.includes(prod)) {
      console.log("El producto ya existe en el carrito");
      setIsInCart(true);
    } else {
      setState(true);
      setProduct([
        ...product,
        {
          id: item.id,
          title: item.title,
          quantity: itemCount,
          price: item.price,
        },
      ]);
    }
  };

  //Eliminar producto del carrito
  const removeItem = () => {
    return product.splice((prod) => prod.id === item.id);
  };
  //Eliminar todos los productos del carrito
  const clearCart = () => {
    setProduct([]);
  };

  //Disminuir cantidad de productos
  const disminuirCantidad = () => {
    if (itemCount > 1) {
      setItemCount(Number(itemCount) - 1);
      setStock(Number(stock) + 1);
    } else {
      alert("Acción invalida");
    }
  };

  //Aumentar cantidad de productos
  const aumentarCantidad = () => {
    if (stock > 1) {
      setItemCount(Number(itemCount) + 1);
      setStock(Number(stock) - 1);
    } else {
      alert("No hay mas stock");
    }
  };

  return (
    <div>
      <div className="item-detail-container">
        <img className="item-detail-img" src={item.pictureUrl} alt="" />
        <div className="item-detail-description">
          <h3 className="item-detail-title">{item.title}</h3>
          <p className="item-detail-price">{item.price}</p>
          <div className="item-detail-count">
            <ItemCount
              onAdd={onAdd}
              disminuirCantidad={disminuirCantidad}
              aumentarCantidad={aumentarCantidad}
              itemCount={itemCount}
              state={state}
              isInCart={isInCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
