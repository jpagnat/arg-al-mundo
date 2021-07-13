import React, { useState, useContext } from "react";
import "./itemDetail.scss";
import { ItemCount } from "../ItemCount/itemCount";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
  const [state, setState] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (itemCount) => {
    setState(true);
    const itemInfo = item;
    const quantity = itemCount;
    addItem(itemInfo, quantity);
  };

  return (
    <div>
      <div className="item-detail-container">
        <img className="item-detail-img" src={item.pictureUrl} alt="" />
        <div className="item-detail-description">
          <h3 className="item-detail-title">{item.title}</h3>
          <p className="item-detail-price">{item.price}</p>
          <div className="item-detail-count">
            <ItemCount onAdd={onAdd} state={state} stockItem={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};
