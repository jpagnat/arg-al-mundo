import React, { useState } from 'react'
import "./itemCount.scss"

export const ItemCount = ({ stock, initial, onAdd }) => {

    let [itemCount, setItemCount] = useState(initial)
    let [itemStock, setItemStock] = useState(stock)

    return (
        < div className='productContainer'>
            <span>Imagen del Producto</span>
            <h5>Nombre Producto</h5>
            <p>Descripción Producto</p>
            <div className="btnContainer">
                <button
                    onClick={() => {
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
                    }> -
                </button>

                <span>{itemCount}</span>

                <button onClick={() => {
                    let newCantidad = 0
                    let newStock = 0

                    if (itemCount >= 1 && itemStock > 1) {
                        newCantidad = Number(itemCount) + 1
                        newStock = Number(itemStock) - 1
                        setItemCount(newCantidad)
                        setItemStock(newStock)
                    } else {
                        alert('No hay mas stock')
                    }
                }
                }> +
                </button>
            </div>
            <button className="addProduct">Agregar</button>
        </div >

    );
};