// 1. Realiza una petición GET con fetch() a JSONPlaceholder
console.log('--- Ejercicio 1: GET básico ---');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log('Posts obtenidos:', posts.slice(0, 3)); // Mostramos solo los 3 primeros para no saturar la consola
    })
    .catch(error => console.error('Error:', error));

// 2. Modifica el ejercicio anterior con verificación de respuesta
console.log('\n--- Ejercicio 2: GET con verificación ---');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        console.log('Posts verificados:', posts.slice(0, 3));
    })
    .catch(error => console.error('Error:', error));

// 3. Reescribe usando async/await
console.log('\n--- Ejercicio 3: GET con async/await ---');
async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        console.log('Posts con async/await:', posts.slice(0, 3));
    } catch (error) {
        console.error('Error:', error);
    }
}

getPosts();

// 4. POST para crear una nueva publicación
console.log('\n--- Ejercicio 4: POST ---');
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Nuevo Post',
        body: 'Contenido del nuevo post',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log('Post creado:', json))
    .catch(error => console.error('Error:', error));

// 5. PUT para actualizar completamente un recurso
console.log('\n--- Ejercicio 5: PUT ---');
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'Post Actualizado',
        body: 'Contenido completamente nuevo',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log('Post actualizado:', json))
    .catch(error => console.error('Error:', error));

// 6. PATCH para modificar parcialmente un recurso
console.log('\n--- Ejercicio 6: PATCH ---');
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Título Modificado'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log('Post modificado parcialmente:', json))
    .catch(error => console.error('Error:', error));

// 7. DELETE para borrar un recurso
console.log('\n--- Ejercicio 7: DELETE ---');
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Post eliminado exitosamente');
        } else {
            throw new Error('Error al eliminar');
        }
    })
    .catch(error => console.error('Error:', error));

// 8. GET a OpenWeatherMap
console.log('\n--- Ejercicio 8: OpenWeatherMap API ---');
const API_KEY = 'TU_API_KEY'; // Reemplaza con tu API key
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Clima en ${city}:`, data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Comentado para no hacer la llamada sin API key
// getWeather('Madrid');

// 9. Cadena de llamadas a la PokéAPI
console.log('\n--- Ejercicio 9: PokéAPI ---');
async function getPokemonEvolutionChain(pokemonName) {
    try {
        // Obtener datos básicos del Pokémon
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        const pokemon = await pokemonResponse.json();
        console.log('Datos del Pokémon:', {
            nombre: pokemon.name,
            tipos: pokemon.types.map(t => t.type.name),
            altura: pokemon.height,
            peso: pokemon.weight
        });

        // Obtener detalles de la especie
        const speciesResponse = await fetch(pokemon.species.url);
        const species = await speciesResponse.json();
        
        // Obtener cadena evolutiva
        const evolutionResponse = await fetch(species.evolution_chain.url);
        const evolution = await evolutionResponse.json();
        console.log('Cadena evolutiva:', evolution.chain);

    } catch (error) {
        console.error('Error:', error);
    }
}

getPokemonEvolutionChain('pikachu');

// 10. Ejemplos de endpoints para probar en Postman/Thunder Client
/*
GET https://jsonplaceholder.typicode.com/posts
GET https://jsonplaceholder.typicode.com/posts/1
GET https://jsonplaceholder.typicode.com/posts/1/comments
POST https://jsonplaceholder.typicode.com/posts
Body:
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}
PUT https://jsonplaceholder.typicode.com/posts/1
PATCH https://jsonplaceholder.typicode.com/posts/1
DELETE https://jsonplaceholder.typicode.com/posts/1
*/