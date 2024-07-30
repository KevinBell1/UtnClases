/* regex email, validador de mails  */
/* /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g.test(emailAVerificar) */

/* LOGIN */

function validarEmail(email){
    return/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g.test()
}
function validarPassword(password){
    return (password.length > 6 && password != password.toLowerCase() && Boolean(password))
}

function obtenerEmail(){
    let emailDelUsuario = prompt("Ingrese un mail")
    while(!validarEmail(emailDelUsuario)){
        emailDelUsuario = prompt("Email no valido, ingrese un mail")
    }
    return alert("Email verificado. Bienvenido: "+emailDelUsuario)
    return emailDelUsuario
}
function obtenerPassword(){
    let passwordDelUsuario = prompt("Ingrese un mail")
    while(!validarEmail(passwordDelUsuario)){
        passwordDelUsuario = prompt("Email no valido, ingrese un mail")
    }
    return alert("Email verificado. Bienvenido: "+passwordDelUsuario)
    return passwordDelUsuario
}

function login(){
    let email = obtenerEmail()
    let password = obtenerPassword()
    return {email: email, password: password}
}