import React, { useEffect, useState } from 'react'
import "./itemListContainer.scss"
import uniqid from 'uniqid'
import { ItemList } from "../ItemList/itemList"

export const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const mostrarItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: uniqid(),
            pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/yerba-mate-amanda-1-kg_1024x1024@2x.jpg?v=1606466159",
            title: "Yerba Amanda",
            price: 300
          },
          {
            id: uniqid(),
            pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/aLFA2_1024x1024@2x.png?v=1606219714",
            title: "Alfajores Havanna",
            price: 500
          }
        ])
        reject()
      }, 2000)
    })

    mostrarItems.then(
      (producto) => {
        setItems(producto)
      },
      (error) => {
        throw new Error('Error de carga')
      }).catch((error) => {
        console.log(error)
      })

  }, [])


  return (
    <div>
      <ItemList items={items} />
    </div>


  );
};