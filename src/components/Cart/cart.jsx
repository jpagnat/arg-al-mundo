import React, { useContext, useEffect, useState, Fragment } from "react";
import { CartContext } from "../../context/cartContext";
import "./cart.scss";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, countCart, removeItem, clearCart } = useContext(CartContext);
  const [newCart, setNewCart] = useState(undefined);

  useEffect(() => {
    const updateCart = () => {
      setNewCart(cart);
    };

    updateCart();
  });

  return (
    <Fragment>
      {newCart === undefined || newCart.length === 0 ? (
        <div className="no-products">
          <p>No hay productos en el carrito</p>
          <Link to="/" className="link-home">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div>
          <div className="cart-container">
            <div className="cart-section">
              <h2>Productos</h2>
              <ul>
                {newCart.map((item) => {
                  return <li>{item.item.title}</li>;
                })}
              </ul>
            </div>

            <div className="cart-section">
              <h2>Cantidad</h2>
              <ul>
                {newCart.map((item) => {
                  return <li>{item.quantity}</li>;
                })}
              </ul>
            </div>

            <div className="cart-section">
              <h2>Precio</h2>
              <ul>
                {newCart.map((item) => {
                  return (
                    <div className="cart-section-control">
                      <li>$ {item.item.price}</li>
                    </div>
                  );
                })}
              </ul>
            </div>

            <div className="cart-section">
              <h2>Total</h2>
              <ul>
                {newCart.map((item) => {
                  let total =
                    parseInt(item.quantity) * parseInt(item.item.price);
                  return <li>$ {total}</li>;
                })}
              </ul>
            </div>

            <div className="cart-section">
              <h2>+/-</h2>
              <ul>
                {newCart.map((item) => {
                  return (
                    <li>
                      <button>+</button>
                      <button>-</button>
                      <button>X</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="totals-container">
            <div>
              <h2>Total de productos: </h2>
              <p>{countCart}</p>
            </div>
            <div>
              <h2>Total a abonar: </h2>
            </div>
            <div>
              <button>Finalizar Compra</button>
            </div>
            <div>
              <button>Vaciar el Carrito</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};