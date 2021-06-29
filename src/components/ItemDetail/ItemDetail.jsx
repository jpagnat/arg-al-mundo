import React from 'react'
import './ItemDetail.scss'


export const ItemDetail = ({ item }) => {

    return (
        <div >
            {item.pictureUrl}
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
    )
}