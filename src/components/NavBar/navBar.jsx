import React from "react";
import "./navBar.scss";
import { CartWidget } from "../CartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="items-navbar collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              activeClassName="item-dulces"
              className="nav-link"
              to="/categories/Dulce"
            >
              Dulces
            </NavLink>
            <NavLink
              activeClassName="item-salados"
              className="nav-link"
              to="/categories/Salado"
            >
              Salados
            </NavLink>
            <NavLink
              activeClassName="item-bebidas"
              className="nav-link"
              to="/categories/Bebida"
            >
              Bebidas
            </NavLink>
          </div>

          <div className="cart-widget">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};
