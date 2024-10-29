import React from 'react'
import './ListaContact.css'
import ContactoGlobo from './ContactoGlobo'

const ListaContacts = ({mook}) => {
    return (
        <div className='listaContactos'>
            {mook.map((contacto) => <ContactoGlobo data={contacto} key={contacto.id}/>)}
        </div>
    )
}

export default ListaContacts