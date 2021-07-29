import React from "react";
import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  const { id } = item;

  return (
    <Link className="link" to={`/item/${id}`}>
      <div className="item">
        <img className="imgItem" src={item.pictureUrl} alt="" />
        <div className="item-description-container">
          <div className="item-description">
            <h3 className="titleItem">{item.title}</h3>
            <p className="priceItem">$ {item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
