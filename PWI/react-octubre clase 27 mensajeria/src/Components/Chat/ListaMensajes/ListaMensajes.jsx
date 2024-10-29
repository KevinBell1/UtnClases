import React from 'react'
import './ListaMensajes.css'
import { Mensaje } from '../..'
import { DATA_MOOK } from '../../../data'


const ListaMensajes = ({mookData}) => {
    console.log(mookData.id)
    return (
        <div className='listaMensajes'>
            {
                mookData.map(mensaje => <Mensaje key={mookData.id}/>)
            }
        </div>
    )
}

export default ListaMensajes
