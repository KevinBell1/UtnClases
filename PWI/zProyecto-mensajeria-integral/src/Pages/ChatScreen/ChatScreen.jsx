import React from 'react'
import { useParams } from 'react-router-dom'
import { DATA_MOOK } from '../../data'
import { ChatHeaderInfo, ChatList } from '../../Components'


const ChatScreen = () => {
    const {userId} = useParams()
    const chat = DATA_MOOK.find(chat => chat.id === Number(userId))
    return (
        <div className='background'>
            <div className='pantalla'>
                <ChatHeaderInfo perfil={chat}/>
                <ChatList data={chat}/>
            </div>
        </div>
    )
}

export default ChatScreen