/* un LOCALSTORAGE es una tabla ketvalue donde guardamos valores que afectaran a nuestra pagina */
/* esta tabla existe en el navegador para que al actualizar o cerrar y abrir la pagina la informacion no desaparezca*/

/* un SESSIONSTORAGE hace lo mismo pero guarda en una session  */

/* tienen 4 herramientas principales */
/* .setItem(key, value) recibe una key y guarda con su value (siempre deben ser strings)
    .getItem(key) busca obtener el dato guardado en esa key
    .removeItem(key) busca eliminar un valor asociado a la key y la key
    .clear() borra todo
    */

    localStorage.setItem("equipo", "boca")

    /* json javascript object notation 
    es un tipo de txt pero que se escribe como un array */

    let string = '{username: "pepe"}'
    JSON.parce(string)

    /* json.parce transforma un string en un objeto */

let objeto = {
    nombre : "pepe",
    edad: "70",
}
let objetoEnString = JSON.stringify(objeto)

