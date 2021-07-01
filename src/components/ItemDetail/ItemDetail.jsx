import React from 'react'
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/itemCount'


export const ItemDetail = ({ item }) => {


    return (
        <div>
            <div className="item-detail-container">
                <img className="item-detail-img" src={item.pictureUrl} alt="" />
                <div className="item-detail-description">
                    <h3 className="item-detail-title">{item.title}</h3>
                    <p className="item-detail-price">{item.price}</p>
                    <div className="item-detail-count">
                        <ItemCount />
                    </div>
                </div>

            </div>

        </div>
    )


}