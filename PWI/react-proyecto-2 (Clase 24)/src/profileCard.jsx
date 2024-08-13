import React from 'react'

export const ProfileCard = ({persona}) => {
    const {nombre, edad, ubicacion} = persona /* desestructuro persona para llamarlo por el nombre directamente */
    return (
        <>
        <h2>Nombre completo: {nombre}</h2>
        <span>Edad: <strong>{edad}</strong></span>
        <h3>Ubicacion: {ubicacion}</h3>
        </>
    )
}


/* DESESTRUCTURACION */
/*  Const persona = {
    nombre: jorge
    apellido: ledesma
} 
    
    const {nombre, apellido} = persona



*/