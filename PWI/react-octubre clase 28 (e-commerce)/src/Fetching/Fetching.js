export const obtenerProductos = async () =>{/* response  realiza un fetch, primero esperando que se haga para definirlo, del data json con el metodo get */
    const response = await fetch(
        '/data.json', {method: "GET"}
    )
    /* console.log({response}) */ /* lo paso como objeto para verificar que se esta ejecutanto el que llamo y no otro de algun fetch */
    /* const data =  await response.json()  devolvera una promise
    console.log({data}) */
    return response.json()
}
/* obtenerProductos() */ /* ejecuto el fetch */