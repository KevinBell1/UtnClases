import React from 'react'
import './ContactScreen.css'
import { ChatZone, ListaContacts } from '../../Components'
import { DATA_MOOK } from '../../data'


const ContactScreen = () => {
    return (
        <div className='background'>
            <div className='celular'>
                <ChatZone/>
                <ListaContacts mook = {DATA_MOOK}/>
            </div>
        </div>
    )
}

export default ContactScreen