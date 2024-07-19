/* SE BUSCA UN PROGRAMA QUE REPITA UNA VARIABLE NOMBRE 3 VECES */



/* let nombre= prompt("introduce tu nombre") */
/* for se utiliza cuando queremos repetir algo x cierta cantidad de veces. por otro lado WHILE es cuando queremos repetir por condicion */

/* SINTAXIS: for (let iterador (o I) = valor inicial; limite de nuestro bucle (mientras mi iterador sea...); actualizacion (cada cuanto avanza mi iteracion)) */
/* for(let iteracion = 1; iteracion <= 3; iteracion= iteracion + 1){
    console.log("me ejecuto" + iteracion)
} */
/* esto se lee: iteracion parte de uno - es menor o igual a 3?- ejecuto con iteracion = iteracion+1
repito: iteracion parte de iteracion +1- es menor o igual a 3? - ejecuto- repito
repito: iteracion parte de iteracion +1 - es menor o igual a 3? No */
/* si la condicion es true, se ejecutara infinitamente, ya que la condicion para ejecutarse es un falsy siempre */
/* for(let i = 1; i <= 10; i= i + 1){
    alert(i)
} */


/* solicitar al usuario un numero 3 veces, ejecutar al final una alerta con la suma de esos tres */
/* let sumatoria = 0
for(let i = 1; i <= 3; i= i + 1){
    let numero = prompt("ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert("la sumatoria es " + sumatoria) */
/* podriamos validar usando:
dentro del for= while(!numero || isNaN(numero)){
    numero = prompt("error: dato no valido")

    para esto no deberiamos poner el number(numero) para que no de error

    el proceso es: si el valor de numero es null (osea "") o si el valor es un NaN(string)
}
*/

/* alert("lista: \n-pepe\n-juan") */
/* tarea */


