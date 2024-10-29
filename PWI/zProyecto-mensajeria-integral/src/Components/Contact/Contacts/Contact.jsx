import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = ({contact}) => {
    const {nombre, mensajes, id} = contact
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

export default Contact