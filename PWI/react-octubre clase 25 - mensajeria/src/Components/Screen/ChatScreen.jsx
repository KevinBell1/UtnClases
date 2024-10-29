import React from 'react'
import { ListaMensajes } from '../Chat'
import './ChatScreen.css'

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
            text:'El ex amor de tu vida ',
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
    
    /* consigna:
    pasar los mensajes a la lista de mensajes, dicha lista por cada mensaje debera crear un componente Mensaje y ese componente recibira cada objeto de mensaje
    lista mensajes va a mapear
    mensaje va a mostrar el globito del chat

    
    */

export const ChatScreen = () => {
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
            <ListaMensajes mook = {MOOK_MENSAJES}/>
            <div className='chau'>chau</div>
        </div>
        </>

    )
}
