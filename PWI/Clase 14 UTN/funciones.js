/* FUNCIONES */

/* declaro mi funcion */
/* function sumar2mas2(){
    console.log(2 + 2)
}

/* la invocamos 
 sumar2mas2() */ 

/*  function sumar(a, b){
    console.log("la suma es " (a + b))
    a = a + 1 /* le sumamos 1 al parametro a 
}
 sumar(1 + 1) */



/* function restar (a, b){
    return a - b
}

let numero1 = 10 
let numero2 = 5

let resultado = restar(numero1, numero2)

console.log(resultado) */

/* 
let precio = prompt("ingrese precio")
function calcularIva(precio){
    return precio * 0.21
}

let resultado = calcularIva(precio)

console.log("el iva es de " + resultado) */

/* let horas = prompt("ingrese horas")
function calcularHoras(horas){
    return horas * 60
}

let resultado = calcularHoras(horas)
alert (horas + " hs son " + resultado + "minutos") */

/* 
let numero = prompt("ingrese numero")

function ValidarNumero(numero) {
    while(!numero || isNaN(numero)){
        numero = prompt("Error: el dato es incorrecto")
    }
    return ValidarNumero(numero)
}

 */
/* a=100
function CalcularIva(a){
    return a*0.21
}
 */
function ObtenerNumero(){
    let numero = prompt("ingrese un numero")
    while(!numero || isNaN(numero) ){
        numero = prompt("Error, ingrese numero")
    }
    numero = Number(numero)
    return numero 
    }
let numero = ObtenerNumero()
alert(numero)
/* methods */
/* string.length = decir cual es la longitud de los strings, es decir la cantidad de letras que tiene */
/* string.toLowerCase = pasa a minuscula y string.toUpperCase a mayuscula*/
/* string.trim = elimina espacios */
/* string.includes(string buscado) = devuelve un boleean sobre si esta incluida la palabra en el string */
/* string.replaceAll(string a reemplazar, string nuevo) = remplaza */
/* string.repeat(string a repetir)
ejemplo
let contraseña = "pepe123"
console.log("*".repeat(contraseña.length))
-cambia la cantidad de letras por * 
*/

