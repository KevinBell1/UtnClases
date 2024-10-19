import React from 'react'
import { ColorCardList } from './ColorCard/ColorCardList.jsx'

const personas= ['pepe','maria','juan']
const listaDePersonasJSX= personas.map((persona)=>{
  return(
    <div>
      {persona}
    </div>
  )
})


const color_card_info = [
  {
    likes: '281',
    fecha: '4 semanas',
    colores: ['#B5C18E','#F7DCB9','#DEAC80','#B99470']
  },
  {
    likes: '50',
    fecha: '1 dia',
    colores: ['#EEEDEB','#E6B9A6','#939185','#2F3645']
  },
  {
    likes: '20011',
    fecha: '2 años',
    colores: ['#91DDCF','#F7F9F2','#7776B3','#E2BBE9']
  },
  {
    likes: '2',
    fecha: '2 s',
    colores: ['#219C90','#059212','#D8EFD3','#78ABA8']
  },
  
]
function App() {
  return (
    <div className='color-card-section'>
      <ColorCardList colorsInfo = {color_card_info}/>
      {listaDePersonasJSX}
    </div>
  )
}




export default App
