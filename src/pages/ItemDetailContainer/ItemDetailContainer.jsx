import React, { useEffect, useState } from "react";
import "./itemDetailContainer.scss";
import { ItemDetail } from "../../components/ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("products");
    const productid = id;
    const item = itemCollection.doc(productid);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No existe el item");
          return;
        }
        setItem([{ id: doc.id, ...doc.data() }]);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="item-detail">
      {item === undefined ? <div className="loader"><p>Cargando..</p></div> : <ItemDetail  item={item} />}
    </div>
  );
};
