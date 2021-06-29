import React, { useEffect, useState } from 'react'
import "./itemListContainer.scss"
import { ItemList } from "../../components/ItemList/itemList"
import { useParams } from 'react-router-dom';

const productos = [
  {
    id: 1,
    pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/yerba-mate-amanda-1-kg_1024x1024@2x.jpg?v=1606466159",
    title: "Yerba Amanda",
    price: 300,
    categoryId: 'Dulce'
  },
  {
    id: 2,
    pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/yerba-mate-amanda-1-kg_1024x1024@2x.jpg?v=1606466159",
    title: "Yerba Amanda",
    price: 300,
    categoryId: 'Salado'
  },
  {
    id: 3,
    pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/aLFA2_1024x1024@2x.png?v=1606219714",
    title: "Alfajores Havanna",
    price: 500,
    categoryId: 'Bebida'
  }
]


export const ItemListContainer = () => {

  const { id } = useParams()
  const [items, setItems] = useState([])

  console.log(id)

  useEffect(() => {
    const mostrarItems = () => {
      return id ? productos.filter((item) => item.id === id) : productos
    }

    const items = mostrarItems()
    setItems(items)
  }, [id])


  return (
    <div>
      <ItemList items={items} />
    </div>


  )

}
