if(verHistorial()=== null){
    localStorage.setItem("historial", JSON.stringify([]))
}
/* funcion agregar al historial */
const historial = [
    {
        accion: 'CALCULAR' ,
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1 
    },
]

function renderizarHistorial(historialRenderizable){

    let historialStr = ""
    for(const item of historialRenderizable){
        historialStr = historialStr + `
        accion: ${item.accion}
        operacion: ${item.operacion}
        numeros: ${item.a}, ${item.b}
        resultado: ${item.resultado}
        `
    }
    return historialStr
}

/* cuando queramos agregar algo llamamos al historial (lo vemos), y directamente pusheamos a esa funcion, porque la funcion guarda un awway automaticamente */
function agregarHistorial(elementoAAgregar){
    verHistorial.push(elementoAAgregar)
    const historial = JSON.stringify(historialStr)
localStorage.setItem("historial", historial)
}
localStorage.setItem("historial", historialStr)

function verHistorial(){
    let historialString = localStorage.getItem('historial')
    return JSON.parse(historialString)
}


/* cuando un usuario entra por primera vez a una pagina no existira historial, para ello creamos uno vacio */
if(verHistorial()=== null){
    localStorage.setItem("historial", JSON.stringify([]))
}
/* si el historial es null, entonces agregaremos al localstorage una key historia y la transformacion de un array (que normalmente se pasaria como object object) de un espacio vacio */
