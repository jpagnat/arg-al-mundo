import React, { useEffect, useState } from 'react'
import "./itemDetailContainer.scss"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
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

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])

    console.log(id)

    useEffect(() => {
        const mostrarItem = () => {
            return productos.filter((item) => item.id === id)
        }

        const items = mostrarItem()
        setItem(item)
    }, [])




    return (
        <div>
            <ItemDetail item={item} />
        </div>


    );
};