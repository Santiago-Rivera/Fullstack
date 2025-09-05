// matematicas.js
// Funciones matemáticas básicas

// Función para sumar
export const sumar = (a, b) => a + b;

// Función para restar
export const restar = (a, b) => a - b;

// Función para multiplicar
export const multiplicar = (a, b) => a * b;

// Función para dividir
export const dividir = (a, b) => {
    if (b === 0) throw new Error('No se puede dividir por cero');
    return a / b;
};

// Exportar un valor por defecto
export default {
    sumar,
    restar,
    multiplicar,
    dividir
};
