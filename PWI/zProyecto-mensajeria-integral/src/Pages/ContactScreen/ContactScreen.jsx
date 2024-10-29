import React from 'react'
import './ContactScreen.css'
import { ContactsList, Options } from '../../Components'
import { DATA_MOOK } from '../../data'

const ContactScreen = () => {
    return (
        <div className='background'>
            <div className='pantalla'>
                <Options/>
                <ContactsList mook= {DATA_MOOK}/>
            </div>
        </div>
    )
}

export default ContactScreen