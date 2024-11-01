import React from 'react'
import Mensaje from '../Mensaje/Mensaje'
import './ChatList.css'



const ChatList = ({mensajes}) => {
    const historialChat = mensajes.mensajes


    return (
        <div className='lista'>
            {historialChat.map(chatRegistrado => <Mensaje dialogo={chatRegistrado} key={chatRegistrado.id}/>)}
        </div>
    )
}

export default ChatList