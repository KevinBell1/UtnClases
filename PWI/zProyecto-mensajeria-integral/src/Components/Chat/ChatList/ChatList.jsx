import React from 'react'
import { DATA_MOOK } from '../../../data'
import Mensaje from '../Mensaje/Mensaje'



const ChatList = ({data}) => {
    return (
        <div>
            {data.mensajes.text}
        </div>
    )
}

export default ChatList