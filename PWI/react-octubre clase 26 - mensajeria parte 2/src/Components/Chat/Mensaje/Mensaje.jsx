import React from 'react'
import './mensaje.css'

export const Mensaje = ({mensajito}) => {
    const {author, text, day, hour, id} = mensajito
    return (
        <>
            <div className=  {author}>
                <div className='author'><strong>{author}</strong></div>
                <div className='texto'>{text}</div> 
                <div className='time'>{day} {hour}</div>
            </div>
        </>
    )
}
