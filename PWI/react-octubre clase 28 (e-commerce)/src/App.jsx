import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {Cart, Details, Home, Contact} from './Pages/index'

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/detail/:productId' element={<Details/>}/> {/* esto nos envia a los detalles del producto con el id.seria /detail/(numero).El : es indicador de una variable */}
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/carrito' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
/* npm install react-router-dom para instalar la forma de react para tener varias paginas */

/* react icons libreria de librerias: se instala con (npm i react-icons) luego importamos el codigo que queremos y lo llamamos como componente */
/* si el nombre de la libreria es el mismo se importa junto, sino en varias lineas */