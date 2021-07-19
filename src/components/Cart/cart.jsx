import React, { useContext, useEffect, useState, Fragment } from "react";
import { CartContext } from "../../context/cartContext";
import "./cart.scss";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, countCart, totalPrice, removeItem, clearCart, setBuyer } =
    useContext(CartContext);
  const [state, setState] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const mostrarFormOrder = () => {
    setState(true);
  };

  const saveUser = () => {
    const user = {
      name: document.getElementById("name").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
    setUserInfo(user);
    setBuyer(user);
  };

  return (
    <Fragment>
      {cart === undefined || cart.length === 0 ? (
        <div className="no-products">
          <p>No hay productos en el carrito</p>
          <Link to="/" className="link-home">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div style={{ display: state ? "none" : "block" }}>
            <div className="cart">
              <div className="cart-item">
                <p className="cart-item-title">Producto</p>
                <ul className="cart-item-content">
                  {cart.map((item) => {
                    return <li>{item.item.title}</li>;
                  })}
                </ul>
              </div>

              <div className="cart-item">
                <p className="cart-item-title">Cantidad</p>
                <ul className="cart-item-content">
                  {cart.map((item) => {
                    return <li>{item.quantity}</li>;
                  })}
                </ul>
              </div>

              <div className="cart-item">
                <p className="cart-item-title">Precio</p>
                <ul className="cart-item-content">
                  {cart.map((item) => {
                    return <li>$ {item.item.price}</li>;
                  })}
                </ul>
              </div>

              <div className="cart-item">
                <p className="cart-item-title">Total</p>
                <ul className="cart-item-content">
                  {cart.map((item) => {
                    let total =
                      parseInt(item.quantity) * parseInt(item.item.price);
                    return <li>$ {total}</li>;
                  })}
                </ul>
              </div>

              <div className="cart-item">
                <p className="cart-item-title">Quitar</p>
                <ul className="cart-item-content">
                  {cart.map((item) => {
                    return (
                      <li>
                        <button
                          onClick={(e) => {
                            removeItem(item.item.id);
                          }}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="totals-container">
              <div className="totals-count">
                <div className="total-item">
                  <h6>Total de productos: </h6>
                  <p>{countCart}</p>
                </div>
                <div className="total-item">
                  <h6>Total a abonar: </h6>
                  <p>$ {totalPrice}</p>
                </div>
              </div>
              <div className="total-buttons">
                <button
                  onClick={mostrarFormOrder}
                  className="link-finalizar-compra"
                >
                  Finalizar Compra
                </button>
              </div>
              <div className="total-buttons">
                <button onClick={clearCart}>Vaciar el Carrito</button>
              </div>
            </div>
          </div>
          <div style={{ display: state ? "block" : "none" }}>
            <h2 className="title-checkout">
              Completa tus datos para finalizar la compra:
            </h2>
            <div className="checkout-form">
              <label>
                Ingrese su nombre:
                <input
                  value={userInfo.name}
                  onChange={saveUser}
                  id="name"
                  type="text"
                ></input>
              </label>
              <label>
                Ingrese su apellido:
                <input
                  value={userInfo.lastname}
                  onChange={saveUser}
                  id="lastname"
                  type="text"
                ></input>
              </label>
              <label>
                Ingrese su correo electronico:
                <input
                  value={userInfo.email}
                  onChange={saveUser}
                  id="email"
                  type="email"
                ></input>
              </label>
              <label>
                Ingrese un telefono de contacto:
                <input
                  value={userInfo.phone}
                  onChange={saveUser}
                  id="phone"
                  type="number"
                ></input>
              </label>
              <Link to="/finalizar-compra" class="finalizar-compra">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
