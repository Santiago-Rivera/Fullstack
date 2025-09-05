// Ejercicios de Manejo de Errores en JavaScript

// 1. Ejercicio básico de try-catch
console.log("--- Ejercicio 1: Try-Catch Básico ---");
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.error("Error en la división:", error.message);
        return null;
    }
}

console.log(dividir(10, 2));  // 5
console.log(dividir(10, 0));  // null

// 2. Crear y usar un error personalizado
console.log("\n--- Ejercicio 2: Error Personalizado ---");
class ValidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValidacionError";
    }
}

function validarEdad(edad) {
    try {
        if (typeof edad !== "number") {
            throw new ValidacionError("La edad debe ser un número");
        }
        if (edad < 0 || edad > 120) {
            throw new ValidacionError("La edad debe estar entre 0 y 120");
        }
        console.log("Edad válida:", edad);
    } catch (error) {
        if (error instanceof ValidacionError) {
            console.error("Error de validación:", error.message);
        } else {
            console.error("Error inesperado:", error.message);
        }
    }
}

validarEdad(25);     // Válido
validarEdad(-5);     // Error
validarEdad("30");   // Error
validarEdad(150);    // Error

// 3. Manejo de múltiples errores
console.log("\n--- Ejercicio 3: Múltiples Errores ---");
function procesarDatos(datos) {
    try {
        if (!Array.isArray(datos)) {
            throw new TypeError("Los datos deben ser un array");
        }
        if (datos.length === 0) {
            throw new Error("El array está vacío");
        }
        
        const resultado = datos.map(num => {
            if (typeof num !== "number") {
                throw new ValidacionError(`El valor '${num}' no es un número`);
            }
            return num * 2;
        });
        
        console.log("Datos procesados:", resultado);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error de tipo:", error.message);
        } else if (error instanceof ValidacionError) {
            console.error("Error de validación:", error.message);
        } else {
            console.error("Error general:", error.message);
        }
    }
}

procesarDatos([1, 2, 3]);          // Válido
procesarDatos("no es array");      // Error
procesarDatos([]);                 // Error
procesarDatos([1, "dos", 3]);      // Error

// 4. Finally y manejo de recursos
console.log("\n--- Ejercicio 4: Finally y Recursos ---");
class Conexion {
    constructor() {
        this.estaConectado = false;
    }

    conectar() {
        this.estaConectado = true;
        console.log("Conexión establecida");
    }

    desconectar() {
        this.estaConectado = false;
        console.log("Conexión cerrada");
    }

    ejecutarConsulta(consulta) {
        if (!this.estaConectado) {
            throw new Error("No hay conexión");
        }
        console.log("Ejecutando consulta:", consulta);
    }
}

function realizarConsulta(consulta) {
    const conexion = new Conexion();
    
    try {
        conexion.conectar();
        conexion.ejecutarConsulta(consulta);
    } catch (error) {
        console.error("Error en la consulta:", error.message);
    } finally {
        conexion.desconectar();
    }
}

realizarConsulta("SELECT * FROM usuarios");

// 5. Promesas y manejo de errores asíncrono
console.log("\n--- Ejercicio 5: Errores Asíncronos ---");
function simularPeticionAPI(exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos recibidos");
            } else {
                reject(new Error("Error en la petición"));
            }
        }, 1000);
    });
}

async function obtenerDatos() {
    try {
        const resultado = await simularPeticionAPI(true);
        console.log(resultado);
        
        const resultadoError = await simularPeticionAPI(false);
        console.log(resultadoError);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerDatos();

// 6. EJERCICIO: Sistema de Validación de Formularios
/*
Crea un sistema de validación de formularios que:
1. Valide diferentes tipos de campos (email, teléfono, contraseña)
2. Use errores personalizados para cada tipo de validación
3. Maneje múltiples errores a la vez
4. Implemente un método para mostrar todos los errores encontrados

Ejemplo de uso:
const validador = new ValidadorFormulario();
validador.validarEmail("correo@invalido");
validador.validarTelefono("123");
validador.validarContrasena("123");
validador.mostrarErrores();
*/

// 7. EJERCICIO: Sistema de Registro de Errores
/*
Implementa un sistema que:
1. Registre diferentes tipos de errores
2. Guarde información relevante como:
   - Timestamp
   - Tipo de error
   - Mensaje
   - Stack trace
3. Permita filtrar errores por tipo
4. Genere un reporte de errores

Ejemplo de uso:
const logger = new ErrorLogger();
logger.registrarError(new Error("Error de prueba"));
logger.mostrarErrores("TypeError");
logger.generarReporte();
*/

// Implementa tu solución aquí
