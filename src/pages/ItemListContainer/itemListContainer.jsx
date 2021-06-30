import React, { useEffect, useState } from 'react'
import "./itemListContainer.scss"
import { ItemList } from "../../components/ItemList/itemList"
import { useParams } from 'react-router-dom';
import productos from '../../datos/productos.json'



export const ItemListContainer = () => {

  const { id } = useParams()
  const [items, setItems] = useState([])


  useEffect(() => {
    const mostrarItems = () => {
      return id ? productos.filter((item) => item.categoryId === id) : productos
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
