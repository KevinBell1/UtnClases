/* RECORRER UN ARRAYS */

/* const nombre = ["pepe", "jorge", "esteban", "pilar"]
for(let i = 0; i < nombre.length; i++){
    let nombre = nombre [i]
    console.log("hola " + nombre)
}

const carrito = [
    {
        nombre: tvsamsung,
        precio: 2000,
        cantidad : 1
    },
    {
        nombre: notebook,
        precio: 1000,
        cantidad: 1
    }
]

for(let i = 0; i < carrito.length; i++){
    const producto = carrito[i]
    console.log("has comprado el producto " + producto.nombre + "(x " + producto.cantidad + "unidades) por "+ producto.precio )
} */

/* const personajes = [
    {
        nombre: "luis",
        apellido : "scola",
        edad: 40,
    },
    {
        nombre: "facundo",
        apellido : "campazzo",
        edad: 29,
    },
    {
        nombre: "manuel",
        apellido : "ginobili",
        edad: 37,
    },
] */
/* let sumatoriaEdad = 0
for(let i = 0; i < personajes.length; i++){
    const jugador = personajes[i]
    console.log("Hola, mi nombre es " + jugador.nombre +" "+ jugador.apellido + " y tengo "+jugador.edad+" años")
    sumatoriaEdad = sumatoriaEdad + jugador.edad
}

console.log("La suma de las edades es de "+sumatoriaEdad+ " años") */



/* for of crea una variable llamada personaje donde guarda el objeto personajes */


/* el forEach crea una variable que tiene al objeto personajes y devuelve mediante una funcion anonima, cada bloque de personajes */
/* for in recorre las propiedades del objeto como lo son nombre, apellido, edad */
/* const datos = {
    nombre: "luis",
    apellido : "scola",
    edad: 40}

    resultado=""
for(let propiedad in datos){
    resultado = resultado + "\n " +propiedad +": " +datos[propiedad]
}
console.log(resultado)
 */

/* metodos avanzados */
/* forEach

personajes.forEach(function (jugador){
    console.log(jugador)
})
    */
/* const personajes = [
    {
        nombre: "luis",
        apellido : "scola",
        edad: 40,
    },
    {
        nombre: "facundo",
        apellido : "campazzo",
        edad: 29,
    },
    {
        nombre: "manuel",
        apellido : "ginobili",
        edad: 37,
    },
]
personajes.filter(function(personaje){
    return personaje.edad >= 18
}) */
/* aqui el filter recibe la informacion de cada bloque de personajes y returna un truly o un falsy si cumplen o no la condicion */

/* const jugadoresMayoresDeEdad = personajes.filter(function(personaje){
    return personaje.edad >= 18
}) */


const productos = [
    {
        nombre: "Tv Samsung ",
        precio: 10000,
        marca : "Samsung",
        id: 1
    },
    {
        nombre: "Monitor noBLex ",
        precio: 10000,
        marca : "noBlex",
        id: 1
    },
    {
        nombre: "PC Samsung ",
        precio: 10000,
        marca : "Samsung",
        id: 4
    },
]


const producutosMarca = productos.filter(function (producto){
    return (producto.marca.toLowerCase() === "noBLex".toLowerCase())
})
/* el tolowercase nos sirve para no diferenciar entre mayus y minus y buscar */

/* FIND
busca el elemento buscado, si no esta devuelve undefined, si lo encuentra, deja de buscar y devuelve el elemeno */
const pepe = personajes.find(function (personaje){
    return personaje.nombre === "pepe"
})

/* cuando tenemos mucho codig podemos poner algo diferencial al objeto que llamemos, unas "" seguido de una coma. para identificarlo en la consola */


/* MAP
realiza un array de otro array*/


