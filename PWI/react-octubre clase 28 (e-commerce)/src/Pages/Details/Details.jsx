import React from 'react'
import { useParams } from 'react-router-dom'
import { listaDeProductos } from '../../data'

const Details = () => {

    /* const urlParams = useParams() */  /* useParams captura las variables como lo es en este caso :productoId. Use parans debe estar usando dentro de un Browser Router, que esta en el main */  /* obtiene la id de la url */

    const { productId } = useParams() /* deja en la consola el id directamente, en vez de llamar al objeto, debe ser el mismo que el valor puesto en la ruta*/
    const producto = listaDeProductos.find(producto => producto.id === Number(productId))  /* la funcion producto busca en el array, y por cada producto si el id es igual a productId(sabiendo que useParams siempre devuelve string, es necesario pasar a numero) */
    console.log(producto)
    return (
        <div>
            <h1>{producto.titulo}</h1>
            <h3>Precio: ${producto.precio}</h3>
            <button>Comprar</button>
        </div>
    )
}

export default Details