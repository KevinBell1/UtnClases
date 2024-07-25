/* let sumatoria = 0
for(let i = 1; i <= 3; i = i + 1){
    let numero = prompt("ingrese un numero")
    while(!numero || isNaN(numero)) {
        numero = prompt("Error, dato no valido. Vuelva a ingresar un numero")
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert("Resultado: " + sumatoria ) */

let cantidad_de_alumnos = prompt("ingrese el numero de alumnos")
cantidad_de_alumnos = Number(cantidad_de_alumnos)
while(!cantidad_de_alumnos || isNaN(cantidad_de_alumnos || i <= 0)){
    cantidad_de_alumnos = prompt("ingrese el numero de alumnos")
}
lista = ""
for(i = 1; i <=cantidad_de_alumnos; i ++){
    nombre = prompt("ingrese el nombre de un alumno")
    while(!nombre || !isNaN(nombre)){
        nombre = prompt("Por favor, ingrese un nombre")
    }
    lista = lista + "\n-" + nombre 
}
alert("Lista" + lista)