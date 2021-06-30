import React, { useEffect, useState } from 'react'
import "./itemDetailContainer.scss"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import productos from '../../datos/productos.json'

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const mostrarItem = () => {
            return productos.find((item) => item.id === id)
        }

        const item = mostrarItem()
        setItem(item)
        console.log(item)
    }, [id])


    return (
        <div>
            <ItemDetail item={item} />
        </div>


    )

}