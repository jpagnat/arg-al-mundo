import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cartWidget.scss";
import { CartContext } from "../../context/cartContext";

export const CartWidget = () => {
  const { countCart } = useContext(CartContext);

  return (
    <Link to="/cart" className="link-cart">
      <div className="cartWidgetContainer">
        <i className={"fas fa-shopping-cart cartWidgetOn"}></i>
        <span>{countCart}</span>
      </div>
    </Link>
  );
};
