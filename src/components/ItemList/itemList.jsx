import React from 'react'
import itemList from './itemList.scss'
import { Item } from "../Item/item"


export const ItemList = ({ items }) => {



    return (
        <div className="item-card">
            {items.length === 0 ? (<p>Cargando..</p>) : (items.map((item) => {
                return <Item key={item.id} item={item} />
            }))}
        </div>
    )
}