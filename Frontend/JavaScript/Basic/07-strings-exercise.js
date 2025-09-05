// Ejercicios de Strings en JavaScript

// 1. Concatenación básica
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log("Concatenación con +:", nombreCompleto);
console.log("Usando template literal:", `${nombre} ${apellido}`);

// 2. Longitud de strings
let frase = "JavaScript es divertido";
console.log("Frase:", frase);
console.log("Longitud de la frase:", frase.length);

// 3. Métodos de transformación
let texto = "Programación Web";
console.log("Original:", texto);
console.log("En mayúsculas:", texto.toUpperCase());
console.log("En minúsculas:", texto.toLowerCase());

// 4. Extracción de caracteres
let palabra = "Desarrollo";
console.log("Palabra:", palabra);
console.log("Primera letra:", palabra[0]);
console.log("Última letra:", palabra[palabra.length - 1]);
console.log("Subcadena (pos 3-7):", palabra.substring(3, 7));

// 5. Búsqueda en strings
let parrafo = "El desarrollo web es una parte fundamental de la programación moderna";
console.log("¿Contiene 'web'?", parrafo.includes("web"));
console.log("Posición de 'es':", parrafo.indexOf("es"));
console.log("Última posición de 'la':", parrafo.lastIndexOf("la"));

// 6. Reemplazo de texto
let mensaje = "Los gatos son los mejores amigos";
console.log("Original:", mensaje);
console.log("Reemplazando 'gatos' por 'perros':", mensaje.replace("gatos", "perros"));
console.log("Reemplazando todas las 'los':", mensaje.replaceAll("los", "unos"));

// 7. Eliminación de espacios
let textoConEspacios = "    Hola Mundo    ";
console.log("Original:", `|${textoConEspacios}|`);
console.log("Sin espacios al inicio y final:", `|${textoConEspacios.trim()}|`);
console.log("Sin espacios al inicio:", `|${textoConEspacios.trimStart()}|`);
console.log("Sin espacios al final:", `|${textoConEspacios.trimEnd()}|`);

// 8. División de strings
let listaFrutas = "manzana,pera,uva,naranja";
let frutas = listaFrutas.split(",");
console.log("String original:", listaFrutas);
console.log("Array de frutas:", frutas);

// 9. Repetición de strings
let estrella = "*";
console.log("Estrella repetida 5 veces:", estrella.repeat(5));

// 10. Ejercicio práctico: Formateo de nombre
function formatearNombre(nombreCompleto) {
    // Elimina espacios extras y divide en palabras
    let palabras = nombreCompleto.trim().split(" ");
    // Capitaliza cada palabra
    palabras = palabras.map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    );
    // Une las palabras nuevamente
    return palabras.join(" ");
}

let nombreDesordenado = "   juAN caRLos   roDRIguez   ";
console.log("Nombre original:", nombreDesordenado);
console.log("Nombre formateado:", formatearNombre(nombreDesordenado));

// 11. Ejercicio final: Validación de correo electrónico simple
function validarEmail(email) {
    // Verificamos si contiene @ y punto
    let tieneArroba = email.includes("@");
    let tienePunto = email.includes(".");
    let longitudValida = email.length > 5;
    let noEspacios = !email.includes(" ");
    
    return tieneArroba && tienePunto && longitudValida && noEspacios;
}

let emails = [
    "usuario@dominio.com",
    "correo.invalido",
    "sin@punto",
    "con espacios@dominio.com",
    "correo@dominio.es"
];

emails.forEach(email => {
    console.log(`¿Es válido ${email}?:`, validarEmail(email));
});
