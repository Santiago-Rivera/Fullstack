// Ejercicios de Funciones en JavaScript

// 1. Función básica - Declaración tradicional
console.log("--- Ejercicio 1: Función básica ---");
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}
console.log(saludar("Ana"));

// 2. Función flecha (Arrow function)
console.log("\n--- Ejercicio 2: Función flecha ---");
const multiplicar = (a, b) => a * b;
console.log("2 x 3 =", multiplicar(2, 3));

// 3. Función con parámetros por defecto
console.log("\n--- Ejercicio 3: Parámetros por defecto ---");
function crearUsuario(nombre, edad = 18, país = "España") {
    return {
        nombre,
        edad,
        país
    };
}
console.log(crearUsuario("Juan"));
console.log(crearUsuario("María", 25, "México"));

// 4. Función con número variable de argumentos
console.log("\n--- Ejercicio 4: Argumentos variables (rest) ---");
function sumarTodos(...numeros) {
    return numeros.reduce((suma, num) => suma + num, 0);
}
console.log("Suma de 1,2,3:", sumarTodos(1, 2, 3));
console.log("Suma de 1,2,3,4,5:", sumarTodos(1, 2, 3, 4, 5));

// 5. Función que retorna otra función (Closure)
console.log("\n--- Ejercicio 5: Closure ---");
function crearContador() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const contador = crearContador();
console.log("Contador:", contador()); // 1
console.log("Contador:", contador()); // 2
console.log("Contador:", contador()); // 3

// 6. Función con callback
console.log("\n--- Ejercicio 6: Callbacks ---");
function procesarArray(arr, callback) {
    return arr.map(callback);
}
const numeros = [1, 2, 3, 4, 5];
const duplicados = procesarArray(numeros, x => x * 2);
console.log("Array original:", numeros);
console.log("Array procesado:", duplicados);

// 7. Función recursiva
console.log("\n--- Ejercicio 7: Recursividad ---");
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial de 5:", factorial(5));

// 8. Función con validación de parámetros
console.log("\n--- Ejercicio 8: Validación ---");
function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Los argumentos deben ser números");
    }
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", dividir(10, 2));
    console.log("10 / 0 =", dividir(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

// 9. Función constructora
console.log("\n--- Ejercicio 9: Función constructora ---");
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    };
}

const persona1 = new Persona("Carlos", 30);
console.log(persona1.saludar());

// 10. Función con desestructuración de objetos
console.log("\n--- Ejercicio 10: Desestructuración ---");
function mostrarInfo({ nombre, edad, profesion = "No especificada" }) {
    return `${nombre} tiene ${edad} años y su profesión es ${profesion}`;
}

const persona = {
    nombre: "Laura",
    edad: 28,
    profesion: "Desarrolladora"
};
console.log(mostrarInfo(persona));

// 11. Función generadora
console.log("\n--- Ejercicio 11: Función generadora ---");
function* generarSecuencia() {
    yield "Primero";
    yield "Segundo";
    yield "Tercero";
}

const secuencia = generarSecuencia();
for (let valor of secuencia) {
    console.log(valor);
}

// 12. Función con promesa
console.log("\n--- Ejercicio 12: Promesas ---");
function esperarYSaludar(nombre, tiempo) {
    return new Promise((resolve, reject) => {
        if (typeof nombre !== 'string') {
            reject("El nombre debe ser una cadena de texto");
        }
        setTimeout(() => {
            resolve(`¡Hola, ${nombre}!`);
        }, tiempo);
    });
}

esperarYSaludar("Pedro", 2000)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log("Error:", error));

// 13. Función con async/await
console.log("\n--- Ejercicio 13: Async/Await ---");
async function obtenerDatos() {
    try {
        const resultado = await esperarYSaludar("Ana", 1000);
        console.log("Resultado:", resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}

obtenerDatos();

// 14. Función de orden superior (Higher-order function)
console.log("\n--- Ejercicio 14: Función de orden superior ---");
function crearOperacion(operacion) {
    switch (operacion) {
        case 'sumar':
            return (a, b) => a + b;
        case 'restar':
            return (a, b) => a - b;
        case 'multiplicar':
            return (a, b) => a * b;
        default:
            return (a, b) => 0;
    }
}

const sumar = crearOperacion('sumar');
const restar = crearOperacion('restar');
console.log("5 + 3 =", sumar(5, 3));
console.log("5 - 3 =", restar(5, 3));

// 15. Función memoizada
console.log("\n--- Ejercicio 15: Memoización ---");
function memoizar(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Recuperando del cache");
            return cache.get(key);
        }
        const resultado = fn(...args);
        cache.set(key, resultado);
        return resultado;
    };
}

const fibonacciLento = memoizar(n => {
    if (n <= 1) return n;
    return fibonacciLento(n - 1) + fibonacciLento(n - 2);
});

console.log("Fibonacci de 10:", fibonacciLento(10));
