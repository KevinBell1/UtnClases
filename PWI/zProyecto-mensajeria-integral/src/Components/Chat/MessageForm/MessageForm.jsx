import React from 'react'
import './MessageForm.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const MessageForm = ({ handleSubmitMessage }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitMessage(e.target.hola.value)
    }

    return (
    <div className='mensajeForm'>
        <form className='messageHub' onSubmit={handleSubmit}>
            <div className='messageSide'>
                <input  name='hola' className='message-input' type='text'/>
                <button type='submit' className='botonSubmit'><IoIosArrowDroprightCircle /></button>
            </div>
        </form>
    </div>
    )
}

export default MessageForm