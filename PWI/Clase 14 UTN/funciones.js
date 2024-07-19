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


let numero = prompt("ingrese numero")

function ValidarNumero(numero) {
    while(!numero || isNaN(numero)){
        numero = prompt("Error: el dato es incorrecto")
    }
    return ValidarNumero(numero)
}

