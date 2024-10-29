
/* en esta clase se ven los props aprox hora 2 */
import React from 'react'
import { ColorCardList } from './ColorCard/ColorCardList'


const perfiles = [
  <div key={1}>
    <p>Jorge</p>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi placeat saepe cupiditate veniam nemo distinctio, ipsa obcaecati perspiciatis ad, quasi porro officia ab fuga atque aspernatur quo reiciendis nulla.</h2>
  </div>,
    <div key={2}>
    <p>Jorge</p>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi placeat saepe cupiditate veniam nemo distinctio, ipsa obcaecati perspiciatis ad, quasi porro officia ab fuga atque aspernatur quo reiciendis nulla.</h2>
  </div>,
    <div key={3}>
    <p>Jorge</p>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi placeat saepe cupiditate veniam nemo distinctio, ipsa obcaecati perspiciatis ad, quasi porro officia ab fuga atque aspernatur quo reiciendis nulla.</h2>
  </div>,
]
const color_card_info = [
  {
    likes: '281',
    fecha: '2 semanas',
    colores: ['#B5C18E', '#F7DCB9', '#DEAC80', '#B99470'],
    id: 1
  },
  {
    likes: '50',
    fecha: '1 dia',
    colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645'],
    id: 2
  },
  {
    likes: '20011',
    fecha: '3 años',
    colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9'],
    id: 3
  },
  {
    likes: '2',
    fecha: '1 s',
    colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8'],
    id: 4
  },
]
function App() {
  return (
    <div className='color-card-section'>
      <ColorCardList colorsInfo={color_card_info} limit={6}/>
      {perfiles}
    </div>
  )
}




export default App
