import React, { useState } from 'react'

const Contador = ({limit}) => {
    const [contador, setContador] = useState(1)
    
const handleIncrementar=()=>{
    if (contador != limit){
        setContador(contador + 1)
    }
}
const handleDecrementar=()=>{
    if(contador != 1){
        setContador(contador - 1)
    }
}

    return (
        <div>
            <button onClick={handleDecrementar}>-</button>
            <span>{contador}</span>
            <button onClick={handleIncrementar}>+</button>
        </div>
    )
}


export default Contador