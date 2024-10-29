
/* en esta clase se ven estados */
import React, { useState } from 'react'
import { ColorCardList } from './Components/ColorCard/ColorCardList'
import Contador from './Components/Contador/Contador'
import NewColorCardForm from './Components/NewColorCardForm/NewColorCardForm'


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
        fecha: '2 s',
        colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8'],
        id: 4
    },
]


/* los componentes como useState siempre va dentro de la funcion */
function App() {

    /*   const [valor, fnCambiadora] = useState(1)
      const Incrementar =() => {
        return (
          fnCambiadora(valor + 1)
        )
    
      }
      const Decrementar =() => {
        return (
          fnCambiadora(valor - 1)
        )
      }
     */

    const [colorCardInfo, setColorCardInfo] = useState(color_card_info)  /* definimos un estado, en el que la primer parte del array es el valor inicial, y la segunda la funcion cambiadora. luego defino al valor que aparecera primeramente en pantalla como el array de cartas */
    const handbleSubmitNewColorCard = (e) => {             /* creamos una funcion la cual le pasamos un evento, y lo defaulteamos */
        e.preventDefault() 
        const newColorCard = {                             /*  creamos una variable con las mismas caracteristicas que la carta de colores*/
            colores: [],
            likes: 0,
            fecha: e.target.fecha.value,
            id: 7
        }
        for (let i = 1; i <= 4; i++) {
            newColorCard.colores.push(e.target['color-' + i].value)        /* pusheamos en la caracteristica colores, el evento color-numero mientras sea menor de 4 (porque la carta tiene 4 colores) */
        }
        setColorCardInfo([...colorCardInfo, newColorCard])                /* se realiza una copia de colorCardInfo (el valor inicial el cual le asignamos al array de colores inicial) y le aplicamos el array newColorCard, que no es mas que otro objeto del array */
        /* const usuario_1 = 'pepe'
            const usuario_2={...usuario_1}
            console.log ({usuario_2})  --->   'pepe'
        */
        /* Es importante decir que este hace una 'captura' de usuario_1 en ese momento, si usuario_1 cambia, usuario_2 no cambiaria de su faseta original. esto porque los estados no pueden cambiar de valores, siempre hay que usar el setColorCardInfo */
    }


    return (
        <div className='color-card-section'>
            <ColorCardList colorsInfo={colorCardInfo} limit={8} /> {/* le paso de promp el estado */}
            {perfiles}
            <div>
                <Contador limit={10} />
            </div>
            <NewColorCardForm handbleSubmitNewColorCard={ handbleSubmitNewColorCard }/>
        </div>
    )
}



/* CLASE DEJADA EN 1 HS 44 MINS */
export default App
