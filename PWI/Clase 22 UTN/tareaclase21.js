const formProductosHTML = document.getElementById("formularioIngresarProducto")

const validarNumero = (numero) => {
    return Boolean(numero) && !isNaN(numero) && numero >= 0
}

const VALIDACIONES = {
    producto : {
        validacion: (nombre) => nombre.length > 6,
        errorText: "El nombre debe tener mas de 6 caracteres",
    },
    precio : {
        validacion: validarNumero,
        errorText: "Error, el precio debe de ser un numero mayor o igual a 0",
    },
    descripcion : {
        validacion: (text) => text.length > 100,
        errorText: "La descripcion debe de tener mas de 100 caracteres",
    },
    stock : {
        validacion: validarNumero,
        errorText: "El stock debe de ser un numero mayor o igual a 0",
    },
    code: {
        validacion: (code) => code.startsWith("#"),
        errorText:"El codigo debe de empezar con '#'"
    },
}

const productoObtenido = (form) => {
    const inputs = ["producto","precio", "descripcion", "stock", "code"];
    inputObj = {};

    for (let input of inputs){
    const spanErrorHTML = document.getElementById("error-" + input )
    const valor = form[input].value
    inputObj = {
        errorHTML : spanErrorHTML,
        validacion : VALIDACIONES[input].validacion,
        error: VALIDACIONES[input].errorText,
        valor: valor,
    }
    }
    return inputObj
}

const handleSubmit = (evento) => {
    evento.preventDefault()
    const form = evento.target;
    const valoresProducto = productoObtenido(form);
    let formularioValido = true;

    for(const propiedad in valoresProducto){
        if(!valoresProducto[propiedad].validacion(valoresProducto[propiedad].valor)){
            valoresProducto[propiedad].errorHTML.innerText = valoresProducto[propiedad].error;
            formularioValido = false;
        }
        else{
            propiedadProducto.errorHTML.innerText = ""
        }
    }   
        if(formularioValido){
            console.log("Objeto de producto: ", productoObtenido(form));
            alert("El producto se ha incluido con exito");
            form.reset();
    }
}

formProductosHTML.addEventListener('submit', handleSubmit)

