//objetivo: consumir la informacion del API de rick y morty
//1. estudiar los endpoints.
//2. mostrar en terminal
// -3 manejar los errores y promesas
//4. crear una interfaz mas amiga.




const BASE_URL = "https://rickandmortyapi.com/api/character";

async function analizarPersonaje() {
    try{
        const response = await fetch(`${BASE_URL}`)

        if(!response.ok) {
            throw new Error(`Error HTTP: no se encontro el persoaje ${response.status}`);
        }

        const data = await response.json()
        console.log(data)
        const personajes = JSON.parse(JSON.stringify(data.results));
        console.log(personajes)
        

        const personajesMapeados = personajes.map((personaje)  => {
            return {
                id: personaje.id, 
                name: personaje.name,
                status: personaje.species,
                gender: personaje.gender, 
            };

        });

    } catch (error){
        console.log("error em la peticion:", error);
        }
}

analizarPersonaje();