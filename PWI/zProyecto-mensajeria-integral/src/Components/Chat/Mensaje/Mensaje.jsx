import React from 'react'
import './Mensaje.css'

const Mensaje = ({dialogo}) => {
    return (
        <>
            <div className={dialogo.author}>
                <div className='author'><strong>{dialogo.usuario}</strong></div>
                <div className='texto'>{dialogo.text}</div>
                <div className='time'> {dialogo.estado} {dialogo.day} {dialogo.hour}</div>
            </div>
        </>
    )
}

export default Mensaje