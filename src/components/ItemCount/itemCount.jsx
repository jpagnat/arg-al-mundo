import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./itemCount.scss";

export const ItemCount = ({ onAdd, state, isInCart, stockItem }) => {
  const [itemCount, setItemCount] = useState(1);
  const [stock, setStock] = useState(stockItem);

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

  //Enviar cantidad a onAdd
  const handleClick = () => {
    onAdd(itemCount);
  };

  return (
    <Fragment>
      <div
        style={{ display: state ? "none" : "block" }}
        className="btnContainer"
      >
        <div>
          <button className="btnCount" onClick={disminuirCantidad}>
            -
          </button>
          <span>{itemCount}</span>
          <button className="btnCount" onClick={aumentarCantidad}>
            +
          </button>
        </div>
        <button onClick={handleClick} className="addCart">
          Agregar
        </button>
      </div>

      <Link className="link-button" to="/cart">
        <button
          style={{ display: state ? "block" : "none" }}
          className="btnFinalizarCompra"
        >
          Finalizar compra
        </button>
      </Link>

      <div>
        <p style={{ display: isInCart ? "block" : "none" }}>
          El producto ya existe en el carrito
        </p>
      </div>
    </Fragment>
  );
};
