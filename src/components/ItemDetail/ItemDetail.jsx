import React from 'react'
import './ItemDetail.scss'


export const ItemDetail = ({ item }) => {

    console.log(item)

    return (
        <div>Hola</div>
    )

    /*const { id, title, price, pictureUrl, categoryId } = item

    return (

        <div className="item">
            <img className="imgItem" src={item.pictureUrl} alt="" />
            <h3 className="titleItem">{item.title}</h3>
            <p className="priceItem">{item.price}</p>
        </div>

    )*/
}