/* EVENTO */
/* acciones que generan otras consecuencias, todos los eventos comienzan en "on"*/

function alertar (){
    alert("Hola desde un evento click")
}


/* otra forma es agarrar el id del boton y definirlo en una constante agarrando el elemento de html */

const click2 = document.getElementById("btn-click-especial")

/* click2.onclick = alertar */

/* luego la invocamos, con su caracterista (tiene mas que el caso anterior) y le agregamos la funcion mediante callback */

/* o mediante una funcion anonima */

/* click2.onclick = function (){
    alert ("Hola buenas tardes")
} */



const btnClick3 = document.getElementById("btn-3")
btnClick3.innerText = "jorge"

/* recordemos que para llamar con getElementByClassName. nos trae una coleccion, por ende debemos poner al final [0] 
const btnClick3 = document.getElementByClassName(".btn") [0]
*/
/* by classname y queryselector nos devuelve objetos parecidos a los arrays, que al ser varios y tener numeros qu definen posiciones se puede iterar, mediante el for of o bucle for*/

/* addeventlistener es un methodo para aplicar un evento, recibe primero el tipo de evento y luego que va a hacer, normalmente mediante una callback pero sino debe ser como funcion anonima es decir , function (){aqui iria la funcion}*/
btnClick3.addEventListener("click", alertar)



/* FUNCIONES FLECHA */

const sumar = (a, b) => a + b
console.log(sumar (8, 8))

const validacionDeNumeros = (numero) => Boolean(numero) && !isNaN(numero)

alert(validacionDeNumeros(6))


const formulario = document.getElementById("formulario")

const handleLogin = (evento) => {
    evento.preventDefault()/* elimina el comportamiento predeterminado, en este caso reargar la pagina al enviar submit */
    console.dir(formulario.dato.value)/* formulario, que es el objeto del formulario, dato, el name, y value, lo que agregue el ingresante del dato. de esta manera se guarda lo ingresado */
}

formulario.addEventListener("submit", handleLogin)/* el prefijo handle siempre se asocia al evento que acompaña al submit */

/* todas las funciones tienen un evento implicito, debido a que reciben informacion sobre como se ejecuto un evento */
/* es importante el x el y, el target (de cual elemento de html se ejecuto) */
/* esto funciona asi: handlelogin debe de recibir un evento, si quisieramos ejecutarlo sin el evento daria undefined. pero como lo ubicamos con el evento submit en el addevent, se auto aplica submit como evento predeterminado. para eso debemos escribir el evento */