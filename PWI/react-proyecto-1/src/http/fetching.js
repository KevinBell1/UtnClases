const obtenerProductos = async () => {
    const response = await fetch("/users/API")
    return response.json()
}

export{obtenerProductos}