import React from 'react'
import "./itemListContainer.scss"
import { ItemCount } from "../ItemCount/itemCount"

export const ItemListContainer = (props) => {
  return (
    <div>
      <p>
        {props.title}
      </p>
      <ItemCount stock="10" initial="1" onAdd="" />
    </div>

  );
};