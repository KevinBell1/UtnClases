import React from "react"
import { Item } from "../CarritoItem/CarritoItem"

export const CarritoDeCompras = () => {
    return(
      <>
        <h1>Carrito de compras</h1>
        <div>
        <Item/>
        <Item/>
        <Item/>
        </div>
      </>
    )
  }