import React, { useState } from 'react'

const Contador = ({limit}) => {
    const [contador, setContador] = useState(0)
    
const handleIncrementar=()=>{
    if (contador != limit){
        setContador(contador + 1)
    }
}
const handleDecrementar=()=>{
    if(contador != 0){
        setContador(contador - 1)
    }
}



    return (
        <div>
            {/*Las llaves en un return significa que vamos a hacer logica de javascript */
                contador === 0
                ? (<button onClick={handleIncrementar}>Comprar</button> )   /* Esto funciona como un if else . podemos hacer con una condicion por ejemplo: {contador} > 2 && alert("bien, segui comprando")*/
                : 
                (<>                                                         {/* Los parentesis lo hacen mas legible */}
                    <button onClick={handleDecrementar}>-</button>   
                    <span>{contador}</span>
                    <button onClick={handleIncrementar}>+</button>
                </>)
            }
        </div>
    )
}


export default Contador