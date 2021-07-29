import React from "react";
import  "./itemList.scss";
import { Item } from "../Item/item";

export const ItemList = ({ items }) => {
  return (
    <div className="item-card">
      {items.length === 0 ? (
        <div className="loader">
            <p>Cargando..</p>
        </div>
        
      ) : (
        items.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      )}
    </div>
  );
};
