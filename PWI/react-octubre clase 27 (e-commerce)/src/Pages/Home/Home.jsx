import React from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { listaDeProductos } from '../../data'

const Home = () => {

    return (
        <div>
            <Navbar />
            <h1>Lista de productos</h1>
            <div>
                {listaDeProductos.map(producto => {
                    return(
                        <div key={producto.id}>
                            <h2>{producto.titulo}</h2>
                            <span>Precio: ${producto.precio}</span>
                            <Link to={'detail/' + producto.id}> Ver detalle</Link>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home

