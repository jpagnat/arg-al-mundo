import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./itemCount.scss";

export const ItemCount = ({
  onAdd,
  disminuirCantidad,
  aumentarCantidad,
  itemCount,
  state,
  isInCart,
}) => {
  return (
    <Fragment>
      <div
        style={{ display: state ? "none" : "block" }}
        className="btnContainer"
      >
        <button className="btnCount" onClick={disminuirCantidad}>
          -
        </button>
        <span>{itemCount}</span>
        <button className="btnCount" onClick={aumentarCantidad}>
          +
        </button>
        <button onClick={onAdd} className="addCart">
          Agregar
        </button>
      </div>
      <Link to="/cart">
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
