// Ejercicios de Operadores en JavaScript

// 1. Operadores Aritméticos
console.log("--- Ejercicio 1: Operadores Aritméticos ---");
let numero1 = 10;
let numero2 = 5;

// Realiza las siguientes operaciones y muestra los resultados
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log("Suma:", suma);  // Debería mostrar 15
console.log("Resta:", resta);  // Debería mostrar 5
console.log("Multiplicación:", multiplicacion);  // Debería mostrar 50
console.log("División:", division);  // Debería mostrar 2
console.log("Módulo:", modulo);  // Debería mostrar 0

// 2. Operadores de Incremento y Decremento
console.log("\n--- Ejercicio 2: Incremento y Decremento ---");
let contador = 0;
console.log("Valor inicial:", contador);  // 0
console.log("Post-incremento:", contador++);  // 0
console.log("Valor después del post-incremento:", contador);  // 1
console.log("Pre-incremento:", ++contador);  // 2
console.log("Valor final:", contador);  // 2

// 3. Operadores de Comparación
console.log("\n--- Ejercicio 3: Operadores de Comparación ---");
let x = 5;
let y = "5";

console.log("¿x == y?", x == y);   // true (comparación no estricta)
console.log("¿x === y?", x === y);  // false (comparación estricta)
console.log("¿x != y?", x != y);    // false
console.log("¿x !== y?", x !== y);  // true
console.log("¿x > 3?", x > 3);      // true
console.log("¿x <= 5?", x <= 5);    // true

// 4. Operadores Lógicos
console.log("\n--- Ejercicio 4: Operadores Lógicos ---");
let esMayorDeEdad = true;
let tieneLicencia = false;

console.log("AND:", esMayorDeEdad && tieneLicencia);  // false
console.log("OR:", esMayorDeEdad || tieneLicencia);   // true
console.log("NOT:", !esMayorDeEdad);                  // false

// 5. Ejercicio Práctico
console.log("\n--- Ejercicio 5: Ejercicio Práctico ---");
let edad = 20;
let tieneIdentificacion = true;
let puedeConducir = edad >= 18 && tieneIdentificacion;

console.log("¿Puede conducir?", puedeConducir);  // true

// 6. Operadores de Asignación Compuesta
console.log("\n--- Ejercicio 6: Operadores de Asignación Compuesta ---");
let puntuacion = 10;
console.log("Puntuación inicial:", puntuacion);  // 10

puntuacion += 5;  // Suma y asignación
console.log("Después de += 5:", puntuacion);  // 15

puntuacion *= 2;  // Multiplicación y asignación
console.log("Después de *= 2:", puntuacion);  // 30

puntuacion /= 3;  // División y asignación
console.log("Después de /= 3:", puntuacion);  // 10

// 7. Operador Ternario
console.log("\n--- Ejercicio 7: Operador Ternario ---");
let temperatura = 25;
let mensaje = temperatura > 30 ? "Hace calor" : "Temperatura agradable";
console.log("Mensaje del clima:", mensaje);  // "Temperatura agradable"

// Ejercicio Final: Combinando Operadores
console.log("\n--- Ejercicio Final: Combinando Operadores ---");
let precio = 100;
let tieneDescuento = true;
let esMiembroPremium = false;

// Calcula el precio final basado en las siguientes condiciones:
// - Si tiene descuento, resta 10%
// - Si es miembro premium, resta 20% adicional
// - Si el precio final es menor a 50, aplica un precio mínimo de 50

let descuento = tieneDescuento ? 0.1 : 0;
let descuentoPremium = esMiembroPremium ? 0.2 : 0;
let precioFinal = precio * (1 - descuento - descuentoPremium);
precioFinal = precioFinal < 50 ? 50 : precioFinal;

console.log("Precio original:", precio);
console.log("Precio final:", precioFinal);