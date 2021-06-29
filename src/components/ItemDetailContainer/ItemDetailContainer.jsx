import React, { useEffect, useState } from 'react'
import "./itemDetailContainer.scss"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const mostrarItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        pictureUrl: "https://cdn.shopify.com/s/files/1/0463/3395/2158/products/yerba-mate-amanda-1-kg_1024x1024@2x.jpg?v=1606466159",
                        title: "Yerba Amanda",
                        price: 300
                    }])
                reject()
            }, 2000)
        })

        mostrarItem.then(
            (product) => setItem(product)
            ,
            (error) => {
                throw new Error('Error de carga')
            }).catch((error) => {
                console.log(error)
            })

    }, [])


    return (
        <div>
            <ItemDetail item={item} />
        </div>


    );
};