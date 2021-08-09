import React, { useContext, useEffect, useState, Fragment } from "react";
import { CartContext } from "../../context/cartContext";
import "../../pages/home/responsive.scss";
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
          <p>Ops! No hay productos en el carrito</p>
          <Link to="/arg-al-mundo" className="link-home">
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div style={{ display: state ? "none" : "block" }}>
            <div className="cart">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr>
                        <th scope="row">
                          <button
                            className="btn-cross"
                            onClick={(e) => {
                              removeItem(item.item.id);
                            }}
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </th>
                        <td>{item.item.title}</td>
                        <td>x {item.quantity}</td>
                        <td>$ {item.item.price}</td>
                      </tr>
                    );
                  })}

                  <tr className="cart-totales table-danger">
                    <th scope="row">Totales</th>
                    <td></td>
                    <td>{countCart}</td>
                    <td>$ {totalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="btn-carrito">
              <button
                onClick={mostrarFormOrder}
                className="link-finalizar-compra"
              >
                Finalizar Compra
              </button>
              <button onClick={clearCart}>Vaciar el Carrito</button>
            </div>
          </div>

          <div style={{ display: state ? "block" : "none" }}>
            <h2 className="title-checkout">
              Completa tus datos para finalizar la compra:
            </h2>
            <div className="checkout-form">
              <label>
                Nombre:
                <input
                  value={userInfo.name}
                  onChange={saveUser}
                  id="name"
                  type="text"
                ></input>
              </label>
              <label>
                Apellido:
                <input
                  value={userInfo.lastname}
                  onChange={saveUser}
                  id="lastname"
                  type="text"
                ></input>
              </label>
              <label>
                E-mail:
                <input
                  value={userInfo.email}
                  onChange={saveUser}
                  id="email"
                  type="email"
                ></input>
              </label>
              <label>
                Telefono:
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
