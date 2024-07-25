/* OBJETOS:
son una caja donde guarda datos que tengan que ver con lo mismo, parecido a una BD */
/* cuando hagamos objetos, deben de ser una const, ya que no nos deja cambiar la referencia pero si el valor referenciado */

/* const usuario = {
    edad : 90,
    nombre : "Juan",
    apellido : "Lopez",
    dinero : 1000,
}
console.log(usuario.dinero) */

/* const producto = {
    nombre : "Set barbero",
    marca : "Jessamy",
    descripcion: "Set para barberia que incluye brocha, bowl y maquina para gillete de acero y madera",
    precio : 150000,
}
 */
const persona = {
    nombre: "jorge",
    edad: 19,
    mejorAmigo : {
        nombre: "facundo",
        edad: 19,
    }
}

/* para cambiar la variable o agregar una */

persona.edad = 20
persona.nroTelefono = 4917419702
persona.mejorAmigo.nombre = "pepe"

/* aveces algunas empresas utilizan informacion con espacios por ejemplo: */
/* const persona = {
"nombre completo" : "pepe suarez"
}
y se lo llama con 
console.log(persona.["nombre completo"]) */