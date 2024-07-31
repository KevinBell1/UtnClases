/* regex email, validador de mails  */
/* /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g.test(emailAVerificar) */

/* LOGIN */

function validarEmail(dato){
    return (/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g.test(dato))
}
function validarPassword(dato){
    return (Boolean(dato) && dato.length > 6 && dato != dato.toLowerCase())
}

/* function obtenerEmail(){
    let email = prompt("Ingrese su mail")
    while (validarEmail(email)){
        email = prompt("por favor ingrese el mail")
    }
    alert("mail ingresado: " + email)
    return email 
}
function obtenerPassword(){
    let password = prompt("cree una contraseña")
    while (!validarPassword(password)){
        password = prompt("por favor ingrese una contraseña")
    }
    alert("contraseña ingresada: "+password)
    return password
} */
/*    function login(){
        let email = obtenerEmail()
        let password = obtenerPassword()
        return {email: email,password: password}
    } */
    
/* UNA FORMA MAS MEJORADA */
/* En este caso armamos un objeto con la infromacion y las callbacks a funcines de validacion y una funcion generica que tome valores de ese objeto */
/* arriba tenemos las funciones de validacion */
/* primero hacemos la funcion de obtencion del dato, que recoja cualquier dato mediante un mensaje, validando, y con un posible error */
function obtenerDato(data){
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato =prompt(data.error)
    }
    return dato
}
/* aqui tenemos la tabla de reacciones segun el dato */
const datos = {
    email: {
        mensaje: "Ingrese un mail",
        error: "Error, dato no valido. por favor ingrese un mail",
        validacion : validarEmail,
    },
    password: {
        mensaje: "Ingrese una contraseña con mas de 6 letras y almenos una mayuscula",
        error: "Error, dato no valido. por favor ingrese una contraseña",
        validacion : validarPassword,
    }
}
/* realizamos la funcion principal, que haga la funcion de obtener dato(que usara la funcion de validacion, primero con el bloque de email y luego con el de password) */
function login(){
    let email = obtenerDato(datos.email)
    let password = obtenerDato(datos.password)
    return {email: email,password: password}
}
