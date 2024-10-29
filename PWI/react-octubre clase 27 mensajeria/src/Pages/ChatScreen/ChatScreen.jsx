import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../../data'
import './ChatScreen.css'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components'


const ChatScreen = () => {
    const { userId } = useParams()
    const chat = DATA_MOOK.find(chat => chat.id === Number(userId))

    const[mensaje, setMensaje]= useState(DATA_MOOK)
    const handleSubmitMensaje=(mensajeNuevo)=>{
        setMensaje(...mensaje,{
            author: 'Yo',
            text:mensajeNuevo,
            estado:'no recibido',
            day:'hoy',
            hour:'15:27',
            id:'8',
        })
    }

    return (
        <div className='backgroundd'>
            <div className='celular'>
                <ChatHeaderInfo/>
                <ListaMensajes mookData={DATA_MOOK}/>
                <MensajeForm handleSubmitMensaje={handleSubmitMensaje}/>
            </div>
        </div>
    )
}

export default ChatScreen