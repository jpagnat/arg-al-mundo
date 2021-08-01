import React from "react";
import  "./itemList.scss";
import { Item } from "../Item/item";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

export const ItemList = ({ items }) => {

  return (
    <div className="item-card">
      {items.length === 0 ? (
        <Loader
      className="loader"
        type="ThreeDots"
        color="#603F8B"
        height={100}
        width={100}
        />
        
      ) : (
        items.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      )}
    </div>
  );
};
