/* console.dir(document) */ /* document es la representacion en objeto de nuestro html */


/* const titulo = document.getElementById("titulo")

titulo.innerText="pepe"

const caja = document.getElementById("producto")
caja.innerHTML = "<h2>Tv Samsung</h2>"/* innertext muestra en la pagina como texto, innerhtml lo agrega al html */

/* const productos = {
    nombre : "Tv Samsung",
    precio: 1000,
    descripcion: "televisor"
} */ 

/* nos interesa a la hora de obtener informacion dinamica y no tener que cambiar en html cada vez que cambie por ejemplo un e commerce*/
/* caja.innerHTML = `
<h2>${productos.nombre}</h2>
<h2>${productos.descripcion}</h2>
<span>$${productos.precio}</span>
`
 */

/* const user = {
    username: "pepecito",
    password: "******2",
    adress: "av siempre viva",
    email: "pepe@gmail.com"
}
const userData = document.getElementById("cajon")
userData.innerHTML = `
<h2>${user.username}</h2>
<span>${user.password}</span> <br>
<input value="${user.adress}"> <br>
<input value=${user.email}>
`; */


/* const producto = [
    {
        nombre : "Tv Samsung",
        precio: 1000,
        descripcion: "televisor"
    },
    {
        nombre : "Notebook Samsung",
        precio: 1200,
        descripcion: "computador personal"
    },
    {
        nombre : "Celular Samsung",
        precio: 700,
        descripcion: "mobile phone"
    },
    {
        nombre : "reloj Samsung",
        precio: 200,
        descripcion: "reloj inteligente"
    },
]

const productosContainer = document.getElementById("productContainer")

let productList = ""
for(let product of producto){
    productList = productList + `
<h2>${product.nombre}</h2>
<h2>${product.descripcion}</h2>
<span>$${product.precio}</span>
<div>
    <input value="${product.precio}">
    <button>Comprar</button>
</div>
`
}

productosContainer.innerHTML = productList */
const products = [
    {
        nombre : "Tv Samsung",
        fecha: "12/02/2020",
        id: "001",
    },
    {
        nombre : "Tv Samsung",
        fecha: "12/02/2020",
        id: "001",
    },
    {
        nombre : "Tv Samsung",
        fecha: "12/02/2020",
        id: "001",
    },
    {
        nombre : "Tv Samsung",
        fecha: "12/02/2020",
        id: "001",
    },
]

const productConteiner = document.querySelector(".practica")

let listOfProducts = ""
for(let product of products){
    listOfProducts = listOfProducts +`
    <div class= "historialItem">
        <span><b>ID: ${product.id}</b></span>
        <h3>${product.nombre}</h3>
        <span>PRECIO: ${product.fecha}</span>
        <br>
    </div>
    `
}
productConteiner.innerHTML = listOfProducts

const historialItem = document.getElementsByClassName('historialItem')/* agarra todos los elementos de esta clase */

for(const item of historialItem){
    const btn = document.createElement('button')
    btn.innerText = "ver publicacion"
    item.appendChild(btn)
}

/* para averiguar que value o class tiene un imput podemos usar input.value en un console.log incluso cuando tengan dos clases en input.classList */
/* para agregar una clase podemos usar input.classList.add("") */
/* para quitar usamos input.classList.remove("") */
/* interruptor a la clase (si no esta la agregamos, si esta la eliminamos)  input.classList.toggle("") */
/* input.classList.replace("2","3") */
/* .value muestra en forma de string las clases */
/* .split luego del value lo pone en arrays (podemos combinarlo con el inlcude para ver si hay una clase en el elemento y ahi input classlist add */