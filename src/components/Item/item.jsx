import React from 'react'
import item from "./item.scss"




export const Item = ({ item }) => {

    return (

        <div className="item">
            <img className="imgItem" src={item.pictureUrl} alt="" />
            <h3 className="titleItem">{item.title}</h3>
            <p className="priceItem">{item.price}</p>
            <button>Comprar</button>
        </div>

    )

}