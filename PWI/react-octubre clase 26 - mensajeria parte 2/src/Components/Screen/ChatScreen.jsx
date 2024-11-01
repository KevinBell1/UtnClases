import React, { useState } from 'react'
import { ListaMensajes } from '../Chat'
import './ChatScreen.css'
import MensajeForm from '../Chat/MensajeForm/MensajeForm'

    const MOOK_MENSAJES = [
        {
            author:'Loquita',
            text:'Hola mi amor',
            estado:'visto',
            day:'hoy',
            hour:'11:27',
            id:'1',
        },
        
        {
            author:'Loquita',
            text:'otro intento?',
            estado:'entregado',
            day:'hoy',
            hour:'11:28',
            id:'2',
        },
                {
            author:'Yo',
            text:'hola beba ',
            estado:'visto',
            day:'hoy',
            hour:'11:28',
            id:'3',
        },
        {
            author:'Yo',
            text:'Volvi, para volver a hacerte mia ',
            estado:'visto',
            day:'hoy',
            hour:'11:28',
            id:'4',
        },
        {
            author:'Yo',
            text:'juju',
            estado:'visto',
            day:'hoy',
            hour:'11:28',
            id:'5',
        },
        {
            author:'Yo',
            text:'jajajajaj',
            estado:'visto',
            day:'hoy',
            hour:'11:28',
            id:'6',
        },

    ]
    
    

export const ChatScreen = () => {
    const [mensaje, setMensaje]=useState(MOOK_MENSAJES)

    const handleSubmitMensaje=(mensajeNuevo)=>{
        setMensaje([...mensaje,{
            author: 'Yo',
            text:mensajeNuevo,
            estado:'no recibido',
            day:'hoy',
            hour:'15:27',
            id:'8',
        }])
    }
    console.log(mensaje)
    return (
        <>
        <div className='celular'>
            <div className='chatHeaderInfo'>
                <div className='foto'>
                    foto
                </div>
                <div className='dataUser'>
                    <h3>Loquita</h3>
                    <p>online</p>
                </div>
            </div>
            <ListaMensajes mook = {mensaje}/>
            <MensajeForm handleSubmitMensaje={handleSubmitMensaje}/>
        </div>
        </>

    )
}
