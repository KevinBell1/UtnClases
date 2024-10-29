import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import './ListaMensajes.css'
import '../Mensaje/Fondo.jpg'

export const ListaMensajes = ({mook}) => {
    return (
        <>
            <div className='lista'>
                {
                    mook.map((mensajeInfo) => <Mensaje mensajito={mensajeInfo} key={mook.id}/>)
                }
            </div>
            
        </>
    )
}
