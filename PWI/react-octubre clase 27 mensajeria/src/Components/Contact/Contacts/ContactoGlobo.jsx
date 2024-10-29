import React from 'react'
import './ContactoGlobo.css'
import { Link } from 'react-router-dom'

const ContactoGlobo = ({data}) => {
    const {nombre, mensajes, id} = data
    return (
        <Link to={'ChatScreen/' + id } className='linkTo'>
            <div className='globoContactoUser'>
                <div className='foto'>
                    <p>foto</p>
                </div>
                <p className='name'>{nombre}</p>
                <span className='time'>{mensajes.hour}</span>
            </div>
        </Link>

    )
}

export default ContactoGlobo