import React, { useState, Fragment } from 'react'
import "./itemCount.scss"

export const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

    let [itemCount, setItemCount] = useState(initial)
    let [itemStock, setItemStock] = useState(stock)

    //Disminuir cantidad de productos
    const disminuirCantidad = () => {
        let newCantidad = 0
        let newStock = 0

        if (itemCount > 1) {
            newCantidad = Number(itemCount) - 1
            newStock = Number(itemStock) + 1
            setItemCount(newCantidad)
            setItemStock(newStock)
        } else {
            alert('Acción invalida')
        }
    }

    //Aumentar cantidad de productos
    const aumentarCantidad = () => {
        let newCantidad = 0
        let newStock = 0

        if (itemStock > 1) {
            newCantidad = Number(itemCount) + 1
            newStock = Number(itemStock) - 1
            setItemCount(newCantidad)
            setItemStock(newStock)
        } else {
            alert('No hay mas stock')
        }
    }

    //Comprar producto
    const addCart = () => {
        alert('Producto agregado!')
        setItemCount(initial)
        setItemStock(stock)
    }


    return (
        < Fragment>
            <div className="btnContainer">
                <button onClick={disminuirCantidad}>-</button>
                <span>{itemCount}</span>
                <button onClick={aumentarCantidad}>+</button>
            </div>
            <button onClick={addCart} className="addProduct">Agregar</button>
        </Fragment >

    )
}