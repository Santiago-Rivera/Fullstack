// Ejercicios de Métodos de Consola en JavaScript

// 1. console.log y sus variantes
console.log("--- Ejercicio 1: console.log básico ---");
const nombre = "Ana";
const edad = 25;
const esEstudiante = true;

// Log básico
console.log("Hola mundo");

// Log con múltiples valores
console.log("Nombre:", nombre, "Edad:", edad);

// Log con template strings
console.log(`${nombre} tiene ${edad} años`);

// 2. console.info, warn y error
console.log("\n--- Ejercicio 2: Diferentes niveles de mensaje ---");
// Información
console.info("Este es un mensaje informativo");

// Advertencia
console.warn("Esta es una advertencia");

// Error
console.error("Este es un mensaje de error");

// 3. console.table
console.log("\n--- Ejercicio 3: Tablas en consola ---");
const estudiantes = [
    { nombre: "Juan", edad: 20, promedio: 8.5 },
    { nombre: "María", edad: 22, promedio: 9.0 },
    { nombre: "Pedro", edad: 21, promedio: 7.8 }
];

// Mostrar array como tabla
console.table(estudiantes);

// Mostrar objeto como tabla
const calificaciones = {
    matematicas: 90,
    historia: 85,
    ciencias: 95,
    literatura: 88
};
console.table(calificaciones);

// 4. console.group
console.log("\n--- Ejercicio 4: Agrupación de mensajes ---");
console.group("Información del Usuario");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.groupEnd();

// Grupos anidados
console.group("Curso");
console.log("Nombre del curso: JavaScript Avanzado");
    console.group("Estudiantes");
    console.log("Total de estudiantes: 3");
    console.log("Promedio del curso: 8.5");
    console.groupEnd();
console.groupEnd();

// 5. console.time
console.log("\n--- Ejercicio 5: Medición de tiempo ---");
console.time("bucleFor");
for(let i = 0; i < 1000000; i++) {
    // Operación que consume tiempo
}
console.timeEnd("bucleFor");

// Comparación de tiempos
console.time("map");
const array = Array(1000000).fill(1).map(x => x * 2);
console.timeEnd("map");

// 6. console.count
console.log("\n--- Ejercicio 6: Conteo de llamadas ---");
function contarLlamadas() {
    console.count("función llamada");
}

contarLlamadas();
contarLlamadas();
contarLlamadas();
console.countReset("función llamada");
contarLlamadas();

// 7. console.trace
console.log("\n--- Ejercicio 7: Stack trace ---");
function funcionA() {
    funcionB();
}

function funcionB() {
    funcionC();
}

function funcionC() {
    console.trace("Traza de la pila de llamadas");
}

funcionA();

// 8. console.assert
console.log("\n--- Ejercicio 8: Aserciones ---");
const numero = 5;
console.assert(numero > 0, "El número debe ser positivo");
console.assert(numero > 10, "El número debe ser mayor que 10");

// 9. Ejercicio práctico: Sistema de logging
console.log("\n--- Ejercicio 9: Sistema de logging ---");
class Logger {
    static log(mensaje, nivel = "INFO") {
        const timestamp = new Date().toISOString();
        switch(nivel.toUpperCase()) {
            case "INFO":
                console.info(`[${timestamp}] INFO:`, mensaje);
                break;
            case "WARN":
                console.warn(`[${timestamp}] WARN:`, mensaje);
                break;
            case "ERROR":
                console.error(`[${timestamp}] ERROR:`, mensaje);
                break;
            default:
                console.log(`[${timestamp}] LOG:`, mensaje);
        }
    }

    static medirTiempo(etiqueta, funcion) {
        console.time(etiqueta);
        funcion();
        console.timeEnd(etiqueta);
    }

    static tabla(datos) {
        console.table(datos);
    }
}

// Uso del sistema de logging
Logger.log("Aplicación iniciada");
Logger.log("Advertencia: memoria baja", "WARN");
Logger.log("Error en la base de datos", "ERROR");

Logger.medirTiempo("operación", () => {
    for(let i = 0; i < 100000; i++) {}
});

Logger.tabla({
    usuarios: 100,
    sesionesActivas: 50,
    errores: 2
});

// 10. EJERCICIO: Implementa un sistema de debugging
/*
Crea una clase Debug que:
1. Tenga diferentes niveles de log (DEBUG, INFO, WARN, ERROR)
2. Permita habilitar/deshabilitar el debugging
3. Incluya información de tiempo transcurrido
4. Permita agrupar mensajes relacionados
5. Muestre información en formato tabla cuando sea apropiado

Ejemplo de uso:
const debug = new Debug();
debug.enable();
debug.log("Iniciando aplicación");
debug.group("Operación");
debug.info("Paso 1");
debug.warn("Precaución");
debug.groupEnd();
debug.disable();
*/

// Implementa tu solución aquí
