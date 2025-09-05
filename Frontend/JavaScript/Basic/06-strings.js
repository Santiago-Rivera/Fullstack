//Strings

// 1. Creación de Strings
let saludo = "¡Hola, mundo!";
let despedida = '¡Adiós, mundo!';
let mensaje = `El saludo es: ${saludo}`;
console.log(mensaje);

// 2. Métodos de Strings
let texto = "   JavaScript es genial!   ";
console.log("Texto original:", texto);
console.log("Texto en mayúsculas:", texto.toUpperCase());
console.log("Texto en minúsculas:", texto.toLowerCase());
console.log("Texto sin espacios:", texto.trim());
console.log("Longitud del texto:", texto.length);

// 3. Acceso a Caracteres
let palabra = "JavaScript";
console.log("Primer carácter:", palabra.charAt(0));
console.log("Último carácter:", palabra.charAt(palabra.length - 1));
console.log("Caracteres entre índices 1 y 4:", palabra.slice(1, 5));

// 4. Búsqueda de Substrings
let frase = "Me encanta aprender JavaScript";
console.log("¿Contiene 'aprender'?", frase.includes("aprender"));
console.log("Índice de 'JavaScript':", frase.indexOf("JavaScript"));
console.log("Último índice de 'a':", frase.lastIndexOf("a"));

// 5. Reemplazo de Substrings
let textoOriginal = "El perro es negro";
let textoModificado = textoOriginal.replace("negro", "blanco");
console.log("Texto original:", textoOriginal);
console.log("Texto modificado:", textoModificado);

// 6. División de Strings
let lista = "manzana,banana,naranja";
let frutas = lista.split(",");
console.log("Lista de frutas:", frutas);

// 7. Plantillas Literales
let nombre = "Juan";
let edad = 30;
let presentacion = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(presentacion);