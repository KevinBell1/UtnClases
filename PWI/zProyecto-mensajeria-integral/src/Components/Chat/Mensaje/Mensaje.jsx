import React from 'react'

const Mensaje = ({dialogo}) => {
    return (
        <div>
            hola {dialogo.mensajes.text}
        </div>
    )
}

export default Mensaje