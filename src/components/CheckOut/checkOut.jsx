import React, { useContext } from "react";
import "./checkOut.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export const CheckOut = () => {
  const { clearCart, order, idDelPedido } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>Tu pedido fue confirmado!</h1>
      <p>
        Tu codigo de seguimiento es el: "{" "}
        <span class="idOrder">{idDelPedido}</span> "
      </p>
      <p>
        Te enviaremos un mail a tu correo electronico para abonar y finalizar la
        compra
      </p>
      <Link to="/arg-al-mundo">
        <button class="btn-checkout" onClick={clearCart}>
          Volver a la tienda
        </button>
      </Link>
    </div>
  );
};
