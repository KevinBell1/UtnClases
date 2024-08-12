/* buena practica(todos los archivos jsx deben importarse a react) */
import React from 'react'
import ReactDOM from 'react-dom/client'/* nos permite crear un DOM virtual (como document) */
import App from './App.jsx'/* importamos app que esta en app jsx. es un componente(funciones que retornan jsx(un codigo parecido a html)) */ /* todos los componentes se escriben en mayus */

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,/* aqui invocamos el componente */
)
/* Aqui la carpeta react dom va a crear un DOM virtual en root (el div del index.html). y dentro de este objeto aplicamos el methodo para renderizar todo lo que vaya en app */