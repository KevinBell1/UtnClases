const formLoginHTML = document.getElementById("formLogin")


const handleLogin = (event) => {
    event.preventDefault()
/*     alert("Bienvenido " + formLoginHTML.username.value) */
    const formulario = event.target.username.value
    if(formulario.length < 4 || !formulario.includes("-")){
        const errorTextHTML = document.getElementById('errorTextMessage')
        errorTextHTML.innerText = "Error, el usuario debe de tener 4 o mas caracteres y un guion "
    }
    else console.log("Bienvenido " + formulario)
}
formLoginHTML.addEventListener("submit", handleLogin)


const formPasswordHTML = document.getElementById("formPassword")

const handlePassword = (event) => {
    event.preventDefault()
    const passwordForm = event.target.password.value
    if(passwordForm.toLowerCase() === passwordForm || !passwordForm.includes("#")){
        const errorTextHTML = document.getElementById("errorTextMessage")
        errorTextHTML.innerText = "Error la contraseña debe tener almenos una mayuscula y un #"
    }
    else console.log("contraseña: " + passwordForm)
}

formPasswordHTML.addEventListener("submit", handlePassword)

const formEmailHTML = document.getElementById("formEmail")

const handleEmail = (event) =>{
    event.preventDefault()
    const mailForm = event.target.mail.value
    if(!/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g.test(mailForm)){
        const errorTextHTML = document.getElementById("errorTextMessage")
        errorTextHTML.innerText = "por favor ingrese un mail"
    }
    else console.log("su mail es: " + mailForm)
}
formEmailHTML.addEventListener("submit", handleEmail)


/* const validador = {
    username: {
        
    }
}



const inputs = ["username", "password"]
const inputsInfo = {}

for( let input of inputs){
    const spanError = document.getElementById("errorText-" + input)
    inputsInfo[input]={
        error: 
    }
}
 */
/* seguir con el modelo escalable */