//Objetivo: crear un metodo que nos permita extraer usuarios4
//de jemplo de os paquetes del navegador para procesarlos.
// paso 1: Buscar el paquete del navegador.
// paso 2: armar la opearcion asincrona.
// paso 3: manejo de errores y promesa.

async function obtenerUsuarios() {
    const BASE_URL = "https://jsonplaceholder.typicode.com"

    try {
    //1. Peticion al servidor
    const response = await fetch(`${BASE_URL}/users`)

    if(!respuesta.ok) {
        throw new error(`error HTTP: no se encontro el usuario ${response.status}`);
    }
    //2. conversion del cuerpo a JSON
    const data = await response.json();
    console.log(JSON.stringify(data)); 
    return data;

    } catch (error) {
        console.log("error en la peticion: ", error);
    } 
    finally {
        console.log("proceso finalizado");
}
}

obtenerUsuarios() ;
