console.log("hola mundo")
/* OPERADORES LOGICOS */

/* !  NOT o negacion
Nos da el valor booleando opuesto al dato que estoy negando

*/
console.log (! true)

/* || OR o O */
/* Seleccionar
si el primer valor es falsy, va a seleccionar el segundo valor
si el primer valor es verdadero, va a seleccionar el primer valor */

console.log("pepe" || 0)
/* mientras siga agregando ira descartando en orden hasta encontrar un verdadero */

console.log( null|| 0 || "hola")


/* && AND o Y logico*/

/* Evalua si un valor es truly o falsy
si el primer valor es false devuelve el primer valor
si el primer valor es true devuelve el segundo valor
*/
console.log (1 && 2 && 3 )

/* importante,pensar como: si el primero es veradero, ejecutar el siguiente*/

/* 4 && false !! "pepe"
en este caso, 4 es verdadero, por lo que devuelve false, y posteriormente devolveria pepe
*/

/* 8 == "8" || 1=== "1"
    true || false
    al ser comparacion devuelve true
*/
/* un NaN no se puede comparar con nada, siempre va a dar falso incluso consigo mismo. para eso usamos isNaN(), donde le damos a la funcion un valor, y nos dira si es un NaN. nos dira true si es un string. y si quedemos averiguar si es un numero podemios decir !IsNaN()  */

/* number ()
si el string es numerico, devuelve el numero
si el string es palabra, devuelve un NaN
si el string es "", devuelve un 0 */



/* VARIABLE */

/* Una variante es un espacio reservado que almacena un dato (referencia), mediante un identificador  */

var edad = 50  /* aqui creo una variable de valor 50 */
edad = "pepe"  /* reasigno un valor */
console.log(edad) /* cuando convocamos a la edad antes, saltara undefined */

/* sintaxis
tipo de variable(var, let, etc) - identificador(nombre de la variable) - valor

*/


/* var 
tiene hoisting? (si puedo llamar a la variable antes de declararla (segun orden de cascada)) SI
se puede reasignar? SI
se puede redeclarar? SI
valor implicito en undefined SI
*/

/*  Let
tiene hoisting? (si puedo llamar a la variable antes de declararla (segun orden de cascada)) NO
se puede reasignar? SI
se puede redeclarar? NO (por ahora)
valor implicito en undefined SI
*/ 

/* CONS
tiene hoisting? (si puedo llamar a la variable antes de declararla (segun orden de cascada)) NO
se puede reasignar? SI
se puede redeclarar? NO
valor implicito en undefined SI
*/


/* bloque {} let entiende de ambientes o bloques, var no
*/
let apellido = "gonzales"
{
    let apellido = "perez"
    console.log(apellido)
}
console.log(apellido)

/* const solo se diferencia en que no puede ser reasignable */