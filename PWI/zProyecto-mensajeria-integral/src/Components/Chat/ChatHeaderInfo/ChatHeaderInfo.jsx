import { DATA_MOOK } from '../../../data'
import './ChatHeaderInfo.css'
import React from 'react'

export const ChatHeaderInfo = ({perfil}) => {
    return (
        <div className='chatHeaderInfo'>
            {perfil.nombre}
        </div>
    )
}
