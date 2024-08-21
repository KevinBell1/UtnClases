import React from 'react' 
import { ProfileCard } from './profileCard'
import { ColorCard } from './Components/tarea24'
/*   let nombre = "pepe"
const obtenerFuncion = () => "pepe" lo mejor seria tener las funciones en otro lado
const suma = {
  suma:"pepe"
} */


/* const App = () => {
  return(<>
    <div>Hola {obtenerFuncion()}</div> lo que esta entre llaves atiende a la logica de javascript
    por ejemplo<div>El resultado de 1+1 = {1+1}</div>
    <div>Hola {suma.suma}</div>puede llamarse a arrays y funciones
    </>
  )
} */
  const color_card_1 = {
    likes: 9,
    fecha: '9/12/2018',
    colores: ['#EEEDEB','#E6B9A6','#939185','#2F3645']
}

const color_card_2 = {
    likes: 12,
    fecha: '1 hora',
    colores: ['#36BA98','#E9C46A','#F4A261','#E76F51']
}

const color_card_3 = {
    likes: 2018,
    fecha: '2 dias',
    colores: ['#91DDCF','#F7F9F2','#7776B3','#E2BBE9']
}

const color_card_4 = {
    likes: 4,
    fecha: '1 dia',
    colores: ['#219C90','#059212','#D8EFD3','#78ABA8']
}



const App = () => {
  const persona_1 = {
    nombre : "Pepe Suarez",
    edad: 89,
    ubicacion: "Libre 123",
  }
  const persona_2 = {
    nombre : "julieta ponce",
    edad: 23,
    ubicacion: "valencia 333",}
    return (
      <section className="color-cards">
              <ColorCard tarjeta = {color_card_1}/>
              <ColorCard tarjeta = {color_card_2}/>
              <ColorCard tarjeta = {color_card_3}/>
              <ColorCard tarjeta = {color_card_4}/>
          </section>
          
      )
}
export default App