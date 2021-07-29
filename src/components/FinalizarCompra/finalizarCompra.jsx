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
    <div className="container-resumen">

    <div>
        <div className="resume-compra">
          <h1>Resumen de compra</h1>

          <p className="cantidad-cart">
            Genial! Tenes {countCart} productos en el carrito
          </p>
        </div>

        <div>
          {cart.map((i) => {
            return (
                  <div className="items-resumen" key={i.item.id}>
                    <p>
                    <i class="fas fa-angle-double-right">  </i> 
                      {i.item.title} - x{i.quantity} unidades
                    </p>
                  </div>
                  );
              })}
        </div>
      </div>

      <div class="total-abonar-container">
          <p className="total-abonar">
              Total a abonar: <span>$ {totalPrice} </span>
          </p>
      </div>
          


          <Link to="checkout" class="btn-finalizar">
            Confirmar pedido
          </Link>

      
    </div>
  );
};
