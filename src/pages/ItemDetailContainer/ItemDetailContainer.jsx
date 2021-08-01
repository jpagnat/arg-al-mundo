import React, { useEffect, useState } from "react";
import "./itemDetailContainer.scss";
import { ItemDetail } from "../../components/ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";

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

    setTimeout(() =>{
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


    }, 1000)
    
  }, [id]);

  return (
    <div className="item-detail">
      {item === undefined ? 
      <Loader
      className="loader"
        type="ThreeDots"
        color="#603F8B"
        height={100}
        width={100}
        /> :
        <ItemDetail  item={item} />}
    </div>
  );
};
