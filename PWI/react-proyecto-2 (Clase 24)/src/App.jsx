import React from 'react' 
import { ProfileCard } from './profileCard'
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
  return(<>
    <ProfileCard 
    persona ={persona_1}
    />
    <ProfileCard 
    persona ={persona_2}
    />
    </>
  )
}
export default App