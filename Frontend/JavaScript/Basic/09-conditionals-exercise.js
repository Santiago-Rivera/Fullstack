// Ejercicios de Condicionales en JavaScript

// 1. Ejercicio básico: Verificar edad
let edad = 17;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 2. Ejercicio: Calificaciones
let calificacion = 85;

if (calificacion >= 90) {
    console.log("A - Excelente");
} else if (calificacion >= 80) {
    console.log("B - Muy bien");
} else if (calificacion >= 70) {
    console.log("C - Bien");
} else if (calificacion >= 60) {
    console.log("D - Necesita mejorar");
} else {
    console.log("F - Reprobado");
}

// 3. Ejercicio: Día de la semana
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
    case 7:
        console.log("¡Fin de semana!");
        break;
    default:
        console.log("Día inválido");
}

// 4. Ejercicio: Verificar contraseña
let contraseña = "Usuario123!";

if (contraseña.length < 8) {
    console.log("La contraseña es muy corta");
} else if (!/[A-Z]/.test(contraseña)) {
    console.log("Debe contener al menos una mayúscula");
} else if (!/[0-9]/.test(contraseña)) {
    console.log("Debe contener al menos un número");
} else if (!/[!@#$%^&*]/.test(contraseña)) {
    console.log("Debe contener al menos un carácter especial");
} else {
    console.log("Contraseña válida");
}

// 5. Ejercicio: Descuentos por compra
let totalCompra = 120;
let esMiembroPremium = true;

let descuento = 0;
if (totalCompra >= 100) {
    if (esMiembroPremium) {
        descuento = 0.2; // 20% descuento
    } else {
        descuento = 0.1; // 10% descuento
    }
}

let precioFinal = totalCompra * (1 - descuento);
console.log(`Precio original: $${totalCompra}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Precio final: $${precioFinal}`);

// 6. Ejercicio: Verificar año bisiesto
let año = 2024;

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log(`${año} es un año bisiesto`);
} else {
    console.log(`${año} no es un año bisiesto`);
}

// 7. Ejercicio: Categoría de IMC
let peso = 70; // en kg
let altura = 1.75; // en metros
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}

// 8. Ejercicio: Juego de piedra, papel o tijeras
function jugarPiedraPapelTijeras(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return "Empate";
    }
    
    if ((jugador1 === "piedra" && jugador2 === "tijeras") ||
        (jugador1 === "papel" && jugador2 === "piedra") ||
        (jugador1 === "tijeras" && jugador2 === "papel")) {
        return "¡Jugador 1 gana!";
    } else {
        return "¡Jugador 2 gana!";
    }
}

console.log(jugarPiedraPapelTijeras("piedra", "tijeras"));
console.log(jugarPiedraPapelTijeras("papel", "piedra"));
console.log(jugarPiedraPapelTijeras("tijeras", "tijeras"));

// 9. Ejercicio: Verificar número
let numero = -5;

if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Cero");
}

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar");
}

// 10. Ejercicio: Sistema de semáforo
function semaforo(color) {
    switch (color.toLowerCase()) {
        case "verde":
            return "¡Adelante! Puedes pasar";
        case "amarillo":
            return "¡Precaución! Prepárate para detenerte";
        case "rojo":
            return "¡Alto! Debes detenerte";
        default:
            return "Color inválido";
    }
}

console.log(semaforo("verde"));
console.log(semaforo("amarillo"));
console.log(semaforo("rojo"));
