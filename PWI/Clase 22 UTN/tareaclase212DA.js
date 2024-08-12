const form = document.getElementById("formularioIngresarProducto")

const validarNumero = (numero)=> {
    return Boolean(numero) && !isNaN(numero) && numero >=0
}

VALIDACIONES = {
    producto: {
        validacion: (producto) => producto.length > 6,
        errorText: "El nombre del producto debe tener mas de 6 caracteres",
    },
    precio: {
        validacion: validarNumero,
        errorText: "el precio debe ser un numero mayor o igual a 0"
    },
    descripcion: {
        validacion: (texto) => texto.length > 100,
        errorText: "la descripcion debe tener mas de 100 caracteres"
    },
    stock: {
        validacion: validarNumero,
        errorText:"el stock debe ser un numero mayor o igual a cero"
    },
    code: {
        validacion: (code) => code.starsWith("#"),
        errorText: "el codigo debe de comenzar con un #"
    }
}

const obtenerProducto = (formulario) => {
    const inputs =["producto", "precio", "descripcion", "stock", "code"]
    const inputobj = {}

    for(let input of inputs){
        const spanErrorHTML =formulario.getElementById("error-" + input)
        const valor = formulario[input].value
        inputObj[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            error: VALIDACIONES[input].error,
            valor: valor,
        }
    }
    return inputObj
}

const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.targer
    const valoresFormulario = obtenerProducto (formulario)
    for(let propiedad in valoresFormulario){
        if(valoresFormulario[propiedad].validacion)
    }

}

