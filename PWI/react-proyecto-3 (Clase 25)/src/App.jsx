import React from 'react'
import { ColorCard, ColorCardList } from './Components/ColorCard/colorCard'


const colors_card_info = [
    {
        likes: 9,
        fecha: '9/12/2018',
        colores: ['#EEEDEB','#E6B9A6','#939185','#2F3645']
    },
    {
        likes: 12,
        fecha: '1 hora',
        colores: ['#36BA98','#E9C46A','#F4A261','#E76F51']
    },
    {
        likes: 2018,
        fecha: '2 dias',
        colores: ['#91DDCF','#F7F9F2','#7776B3','#E2BBE9']
    },
    {
        likes: 4,
        fecha: '1 dia',
        colores: ['#219C90','#059212','#D8EFD3','#78ABA8']
    },
]

const personas = ['pepe', 'david', 'jose']
const ListaJSXPersonas = personas.map((persona) => {/* aqui atraviesa el array personas y en cada elemento definido como persona, lo devuelve. parecido al for */
    return (
        <div>{persona}</div>
    )
})

const App = () => {
return (
    <>
        <section className="color-cards">
            <ColorCardList  colors_info={colors_card_info}/>
            {ListaJSXPersonas}
        </section>
    </>
)
}

export default App

