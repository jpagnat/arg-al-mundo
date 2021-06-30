import React from 'react'
import item from "./item.scss"
import { Link } from 'react-router-dom';





export const Item = ({ item }) => {

    const { id, title, price, pictureUrl, categoryId } = item

    return (
        <Link className='link' to={`/item/${id}`}>
            <div className="item">
                <img className="imgItem" src={item.pictureUrl} alt="" />
                <h3 className="titleItem">{item.title}</h3>
                <p className="priceItem">{item.price}</p>
            </div>
        </Link>
    )

}