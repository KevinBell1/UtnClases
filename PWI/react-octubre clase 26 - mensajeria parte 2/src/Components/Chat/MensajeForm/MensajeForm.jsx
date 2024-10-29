import React from 'react'

const MensajeForm = ({ handleSubmitMensaje }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitMensaje(e.target.mensaje.value)
    }


    return (
        <div className='mensajeForm'>
            <form className='message-hub' onSubmit={handleSubmit}>
                <div className='hola'>
                <input type="text" name='mensaje' className='message-input' />
                <button type='submit' className='audio' id='mic'><i class="bi bi-send-fill"></i></button>
                </div>

            </form>
        </div>
    )
}

export default MensajeForm