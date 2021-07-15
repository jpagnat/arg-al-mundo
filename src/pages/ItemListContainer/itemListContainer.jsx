import React, { useEffect, useState } from "react";
import "./itemListContainer.scss";
import { ItemList } from "../../components/ItemList/itemList";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("products");
    const filterItems = id
      ? itemCollection.where("categoryId", "==", id)
      : itemCollection;
    filterItems
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
