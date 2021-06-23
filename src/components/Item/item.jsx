import React from 'react'
import item from "./item.scss"
import { ItemCount } from '../ItemCount/itemCount'




export const Item = ({ item }) => {

    return (

        <div>
            <img className="imgItem" src={item.pictureUrl} alt="" />
            <h3 className="titleItem">{item.title}</h3>
            <p className="priceItem">{item.price}</p>

            <ItemCount stock="10" initial="1" onAdd="" />
        </div>

    )

}