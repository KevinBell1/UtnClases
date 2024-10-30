import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { listaDeProductos } from '../../data'
import { obtenerProductos } from '../../Fetching/Fetching'


/* settimeout recibe una funcion a ejecutar y un tiempo para ejecutarse, en ese caso un console log que diga hola a los 2s(se expresa en milisegundos). esto posterga la ejecucion de la callback */
/* setTimeOut(
        () => {
            console.log('hola)                
        },
        2000
    ) */


const Home = () => {
    const [listaProductos, setListaProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true) /* una constante cargando, que le damos valor true para que abajo ejecute primeramente en el if, y en su invocacion tendra un false cuando el fetch haya ejecutado el array */
    const [SearchString, setSearchString] = useState('')        


    useEffect(
        ()=>{  /* use efect recibe una funcion, la que hicimos antes, y un array. el array vacio significa que se ejecutara una sola vez, ya que use efect controla la funcionalidad de una funcion */
                setTimeout(()=>{
                    obtenerProductos()
                    .then((productos)=>{
                        console.log('productos: ', productos)
                        if(SearchString){
                            const nuevaListaProductos =productos.filter(
                                producto => producto.titulo.toLowerCase().includes(SearchString.toLowerCase())
                            )
                            setListaProductos(nuevaListaProductos)
                        }
                        else{
                            setListaProductos(productos)
                        }
                        setIsLoading(false)
                    }
                    )                         /* en este caso productos es el resultado del await de la funcion obtenerProductos */
                },500
            )
        },
        [SearchString]   /* IMPORTANTE: si se invoca, las definciones de estados deben estar antes */
)



    const handleSearchString = (e) =>{
        console.log(e.target.value)                  /* la forma de hacer una funcion: definimos el estado de value, y hacemos una funcion para cambiarlo. luego definimos la funcion que sera aplicada cuando se haga determinada accion (handle cuando se cambie el use state base que son '') y finalmente aplicamos la funcion que va a cambiar el estado, con el value  */
        setSearchString(e.target.value)
    } 

    return (
        <div>
            <Navbar />
            <input placeholder='Buscar un producto' value={SearchString} onChange={handleSearchString} />
            <h1>Lista de productos</h1>
            <div>
                {
                    isLoading
                    ? <h2>Cargando</h2>
                    :listaProductos.map(producto => {
                        return(
                            <div key={producto.id}>
                                <h2>{producto.titulo}</h2>
                                <span>Precio: ${producto.precio}</span>
                                <Link to={'detail/' + producto.id}> Ver detalle</Link>
                                <hr />
                            </div>
                        )
                    })
                }


                
                
            </div>
        </div>
    )
}

export default Home

