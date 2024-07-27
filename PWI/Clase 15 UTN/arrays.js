/* Arrays */
/* se utilizan para lista cosas en un orden */

const notasTrimestres = [9, 10, 6]
/* en este caso el 9 tiene index 1 */
console.log("el segundo trimestre te sacaste un " + notasTrimestres[0])
notasTrimestres[1] = 2 /* asi se le cambia el valor */

/* metodos que solo funcionan en los arrays */
/* notasTrimestres.pop() */ /* elimina el ultimo elemento, pero pueden reacerlo*/
/* notasTriestres.shift() */ /* elimina el primer elemento, pero pueden reacerlo */

/* .push agrega al final */
/* .unshift agrega la principio */

/* .indexOf(elemento que quiero saber)  muestra la posicion del elemento que busco*/

/* .splice(posicion buscada, cuantos elementos a partir de ahi eliminare, cual sera el nuevo elemento) */
/*  .includes(string) devuelve un boolean que dice si esta incluido un elemento en el grupo */
/* ej:


nombre.splica(nombre.indexOf("valentina"), 1)

o para agregar

nombre.splice(nombre.indexOf("maria"),0 ,"carlos")

tambien podemos tener una funcion donde retorne los eliminados

const elementosEliminados = nombre.splice(nombre.indexOf("valentina"), 1)
*/