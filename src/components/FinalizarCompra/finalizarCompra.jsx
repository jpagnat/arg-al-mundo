import React, { useContext, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./finalizarCompra.scss";
import { CartContext } from "../../context/cartContext";
import { getFireStore } from "../../firebase/firebase";

export const FinalizarCompra = () => {
  const { cart, countCart, totalPrice, order, setIdDelPedido } =
    useContext(CartContext);
  const { buyer } = order;
  const [idOrder, setIdOrder] = useState();

  useEffect(() => {
    const db = getFireStore();
    const ordenes = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: cart,
      totalQuantity: countCart,
      totalPrice: totalPrice,
    };

    ordenes
      .add(newOrder)
      .then(({ id }) => {
        setIdOrder(id);
        setIdDelPedido(id);
      })
      .finally(() => {});
  }, [buyer]);

  return (
    <Fragment>
      <div className="title-checkout">
        <h1>Resumen de compra</h1>
        <p className="cantidad-cart">
          Genial! Tenes {countCart} productos en el carrito
        </p>
      </div>
      <div className="container-checkOut">
        <div className="container-checkOut-hijo">
          <div className="container-compra">
            <div className="container-ItemsCompra">
              {cart.map((i) => {
                return (
                  <div className="container-itemCompra" key={i.item.id}>
                    <p>
                      {i.item.title} - x{i.quantity} unidades
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="total-abonar">
              Total a abonar: <span>$ {totalPrice} </span>
            </p>
          </div>
        </div>

        <div className="medios-pago container-checkOut-hijo">
          <p>Selecciona el medio de pago:</p>
          <label>
            MercadoPago
            <input type="radio"></input>
          </label>
          <label>
            Tarjeta de Credito
            <input type="radio"></input>
          </label>
          <label>
            Efectivo
            <input type="radio"></input>
          </label>

          <Link to="checkout" class="btn-finalizar">
            Confirmar pedido
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
