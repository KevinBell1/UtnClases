import React from 'react'
const PI = 3.14
export {PI,Item}

const Item = () => {
    return (
        <div>
            <h2>Nombre del producto</h2>
            <span>Cantidad: x</span>
            <br/><br/>
            <button>Eliminar</button>
        </div>
    )
    }
/* un posible error puede suceder si intento usar lenguaje jsx en un archivo js. en ese caso debo hacerlo jsx e invocar react */