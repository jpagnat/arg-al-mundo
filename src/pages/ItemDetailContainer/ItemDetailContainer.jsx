import React, { useEffect, useState } from "react";
import "./itemDetailContainer.scss";
import { ItemDetail } from "../../components/ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import productos from "../../datos/productos.json";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const mostrarItem = () => {
      return productos.find((item) => item.id === id);
    };

    const item = mostrarItem();
    setItem(item);
  }, [id]);

  return (
    <div>
      {item === undefined ? <p>Cargando..</p> : <ItemDetail item={item} />}
    </div>
  );
};
