const URL_API = "https://jsonplaceholder.typicode.com"

/* const response = fetch(URL_API+ "/users", {
    method : "GET",
}) */

/* un codigo fetch llama a una api, es asincronico, es decir que se ejecuta casi al mismo tiempo que la accion que le queramos brindar, por lo que no llega a dar una respuesta a la hora de ejecutarse esta accion, por lo que se define en pending */

/* const response = fetch(URL_API+ "/users", {
    method : "GET",
    console.log(response)
})                                                 en este caso el console log va a devolver el pending, debido a que no cargo el fetch aun
    */

/* PARA ELLO DEBEMOS MARCARLE EN QUE TIEMPOS SE EJECUTAN LA ACCION */

/* const obtenerProducto = async () => {

const response = await fetch(URL_API + "/users",{
    method : "GET",
})
console.log(response)
} */

/* en este caso hicimos una funcion para ejecutar la accion anterior, marcamos a la funcion la asincronicidad y a la accion le marcamos que debe de esperar en el fetch para seguir ejecutandose. sin el async no se puede poner el await */
/* en funciones viejas 
async function () {
}  */

/* const obtenerInfo = async () =>{
    const response = await  fetch("URL_API" + "./users", {
        method : "GET",
    })
    const data = await response.json()
    console.log(data)
}

obtenerInfo()
 */
/* aqui hicimos que nuestra accion fetch busque en la api a los users, despues de eso definimos a data como la funcion de json del api de users, despues lo llamamos a consola */



const obtenerUsuarioPorId = async (id) =>{
    const response = await fetch(URL_API +"/users/" + id,{
        method : "GET"
    })
    const user = await response.json()
    renderizarUsuario(user)
}

const renderizarUsuario = (user) =>{
    const userInfoHTML = document.getElementById("userBlock")
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    userInfoHTML.innerHTML=`
    <h2>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}
