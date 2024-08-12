import React from 'react' /* siempre que se tiene un archivo jsx se importa React */
/* para prender el servidor debo oprimir en spm run dev y para cerrarlo control+c */
import {PI, Item} from './Components/CarritoItem/CarritoItem'
import {obtenerProductos} from './http/fetching'
import { CarritoDeCompras } from './Components/Carrito/carrito'

console.log(PI)
function App() {

  return (
    <> {/* fragmento que no existe en la pagina pero crea un elemento padre. para tener dos hermanos hijos */}
      <div>
        <h1>Hola desde react</h1>
        <ProductCard />
        <CarritoDeCompras/>
      </div>
    </>
  )
}

const ProductCard = () => {
  return (
    <>
      <div>
          <h2>titulo del producto</h2>
          <span>precio</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam atque, illo dolorum minima nemo voluptate illum ipsam sit cum!</p>
          <button>comprar</button>
      </div>
      <div>
        <br/>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </>

  )
}










export default App
