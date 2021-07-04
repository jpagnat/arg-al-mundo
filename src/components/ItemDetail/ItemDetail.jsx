import React, { useState } from 'react'
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/itemCount'


export const ItemDetail = ({ item }) => {

    const [stock, setStock] = useState(item.stock)
    const [itemCount, setItemCount] = useState(1)
    const [state, setState] = useState(false)

    const onAdd = () => {
        setState(true)
    }

    //Disminuir cantidad de productos
    const disminuirCantidad = () => {

        if (itemCount > 1) {
            setItemCount(Number(itemCount) - 1)
            setStock(Number(stock) + 1)
        } else {
            alert('Acción invalida')
        }
    }

    //Aumentar cantidad de productos
    const aumentarCantidad = () => {
        if (stock > 1) {
            setItemCount(Number(itemCount) + 1)
            setStock(Number(stock) - 1)
        } else {
            alert('No hay mas stock')
        }
    }


    return (
        <div>
            <div className="item-detail-container">
                <img className="item-detail-img" src={item.pictureUrl} alt="" />
                <div className="item-detail-description">
                    <h3 className="item-detail-title">{item.title}</h3>
                    <p className="item-detail-price">{item.price}</p>
                    <div className="item-detail-count">
                        <ItemCount
                            onAdd={onAdd}
                            disminuirCantidad={disminuirCantidad}
                            aumentarCantidad={aumentarCantidad}
                            itemCount={itemCount}
                            state={state}
                        />
                    </div>
                </div>

            </div>

        </div>
    )


}