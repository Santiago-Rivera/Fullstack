// Ejercicios de Bucles (Loops) en JavaScript

// 1. Bucle for básico
console.log("--- Ejercicio 1: Bucle for básico ---");
console.log("Contar del 1 al 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Bucle while
console.log("\n--- Ejercicio 2: Bucle while ---");
console.log("Cuenta regresiva:");
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("¡Despegue!");

// 3. Bucle do-while
console.log("\n--- Ejercicio 3: Bucle do-while ---");
console.log("Lanzar un dado hasta obtener 6:");
let resultado;
let intentos = 0;
do {
    resultado = Math.floor(Math.random() * 6) + 1;
    intentos++;
    console.log(`Intento ${intentos}: ${resultado}`);
} while (resultado !== 6);
console.log(`Se obtuvo 6 en ${intentos} intentos`);

// 4. for...of con arrays
console.log("\n--- Ejercicio 4: for...of con arrays ---");
let frutas = ['manzana', 'banana', 'naranja', 'pera', 'uva'];
console.log("Lista de frutas:");
for (let fruta of frutas) {
    console.log(`- ${fruta}`);
}

// 5. for...in con objetos
console.log("\n--- Ejercicio 5: for...in con objetos ---");
let persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid',
    profesion: 'Desarrollador'
};
console.log("Datos de la persona:");
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// 6. Bucles anidados: Tabla de multiplicar
console.log("\n--- Ejercicio 6: Tabla de multiplicar ---");
for (let i = 1; i <= 5; i++) {
    console.log(`\nTabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 7. break y continue
console.log("\n--- Ejercicio 7: break y continue ---");
console.log("Números del 1 al 10 (saltando múltiplos de 3):");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

console.log("\nBuscar el primer número divisible por 5 y 7:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(`El número es: ${i}`);
        break;
    }
}

// 8. Ejercicio práctico: Patrón de asteriscos
console.log("\n--- Ejercicio 8: Patrón de asteriscos ---");
let n = 5;
// Triángulo
console.log("Triángulo:");
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}

// 9. Ejercicio: Fibonacci
console.log("\n--- Ejercicio 9: Serie Fibonacci ---");
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log("Los primeros 10 números de Fibonacci:", fibonacci);

// 10. Ejercicio: Búsqueda en array
console.log("\n--- Ejercicio 10: Búsqueda en array ---");
let numeros = [4, 2, 7, 1, 9, 5, 3, 8, 6];
let buscar = 7;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) {
        console.log(`Número ${buscar} encontrado en la posición ${i}`);
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log(`Número ${buscar} no encontrado`);
}

// 11. Ejercicio: Validación de entrada
console.log("\n--- Ejercicio 11: Validación de entrada ---");
function validarContraseña(contraseña) {
    let tieneMinuscula = false;
    let tieneMayuscula = false;
    let tieneNumero = false;

    for (let char of contraseña) {
        if (char >= 'a' && char <= 'z') tieneMinuscula = true;
        if (char >= 'A' && char <= 'Z') tieneMayuscula = true;
        if (char >= '0' && char <= '9') tieneNumero = true;
    }

    return tieneMinuscula && tieneMayuscula && tieneNumero;
}

let contraseñas = ["Password1", "password", "12345", "Abc123"];
for (let pass of contraseñas) {
    console.log(`${pass}: ${validarContraseña(pass) ? 'Válida' : 'Inválida'}`);
}

// 12. Ejercicio: Filtrado de array
console.log("\n--- Ejercicio 12: Filtrado de array ---");
let palabras = ['casa', 'perro', 'gato', 'elefante', 'sol', 'mariposa'];
let palabrasLargas = [];
let palabrasCortas = [];

for (let palabra of palabras) {
    if (palabra.length > 4) {
        palabrasLargas.push(palabra);
    } else {
        palabrasCortas.push(palabra);
    }
}

console.log("Palabras largas (>4):", palabrasLargas);
console.log("Palabras cortas (≤4):", palabrasCortas);
