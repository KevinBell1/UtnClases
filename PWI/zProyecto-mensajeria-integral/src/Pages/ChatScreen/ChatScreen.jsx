import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../../data'
import { ChatHeaderInfo, ChatList, MessageForm } from '../../Components'

/*PARA ENTENDER FUNCINAMIENTO CHATGPT Y PASAR EL CODIGO PIDIENDO QUE EXPLIQUE PASO A PASO*/
const ChatScreen = () => {
    const {userId} = useParams()                                          
    const chat = DATA_MOOK.find(chat => chat.id === Number(userId))

    const [mensaje, setMensaje] = useState(chat);

    const handleSubmitMessage = (mensajeNuevo) =>{
        setMensaje({...mensaje, mensajes: [...mensaje.mensajes,{           /* aqui primero se clona mensaje (el array de objetos principal) y se agrega un array(otro mensaje) donde se clona mensaje.mensajes (los anteriores), y se agrega un array con la data nueva */
            usuario: 'Yo',
            author: 'Yo',
            text:mensajeNuevo,
            estado:'no recibido',
            day:'hoy',
            hour:'15:27',
            id: Date.now().toString(),
        }]})
    }

    return (
        <div className='background'>
            <div className='pantalla'>
                <ChatHeaderInfo perfil={chat}/>
                <ChatList mensajes = {mensaje}/>
                <MessageForm handleSubmitMessage={handleSubmitMessage}/>
            </div>
        </div>
    )
}

export default ChatScreen