import { DATA_MOOK } from '../../../data'
import './ChatHeaderInfo.css'
import React from 'react'

export const ChatHeaderInfo = ({perfil}) => {
    console.log(perfil)
    return (
        <div className='chatHeaderInfo'>
            <div className= {perfil.nombre}></div>
            <h3>{perfil.nombre}</h3>
        </div>
    )
}
