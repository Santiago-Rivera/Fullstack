// 1. RegEx para validar correos electrónicos
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Función de prueba para correos
function validarEmail(email) {
    return emailRegex.test(email);
}

// Pruebas de correos electrónicos
console.log('--- Pruebas de Validación de Emails ---');
const emailsPrueba = [
    'usuario@dominio.com',
    'usuario.nombre@empresa.com',
    'usuario+alias@dominio.co.uk',
    'invalido@dominio',
    '@dominio.com',
    'usuario@.com',
    'usuario@dominio.'
];

emailsPrueba.forEach(email => {
    console.log(`${email}: ${validarEmail(email) ? 'Válido' : 'Inválido'}`);
});

// 2. RegEx para obtener Hashtags
const hashtagRegex = /#[a-zA-Z0-9_]+/g;

// Función para extraer hashtags
function obtenerHashtags(texto) {
    return texto.match(hashtagRegex) || [];
}

// Pruebas de hashtags
console.log('\n--- Pruebas de Extracción de Hashtags ---');
const textosPrueba = [
    'Me encanta #programacion y #JavaScript #coding',
    'Sin hashtags aquí',
    'Múltiples #hashtags en #una #misma #linea',
    '#inicio del texto',
    'Final del texto #fin',
    '#123 #test_tag #PascalCase #camelCase'
];

textosPrueba.forEach(texto => {
    console.log(`Texto: ${texto}`);
    console.log('Hashtags encontrados:', obtenerHashtags(texto));
});

// 3. RegEx para validar contraseñas seguras
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// Función para validar contraseñas
function validarPassword(password) {
    return {
        valida: passwordRegex.test(password),
        requisitos: {
            longitudMinima: password.length >= 8,
            tieneMayuscula: /[A-Z]/.test(password),
            tieneMinuscula: /[a-z]/.test(password),
            tieneNumero: /\d/.test(password),
            tieneEspecial: /[@$!%*#?&]/.test(password)
        }
    };
}

// Pruebas de contraseñas
console.log('\n--- Pruebas de Validación de Contraseñas ---');
const passwordsPrueba = [
    'abc123',                    // Muy corta
    'abcdefgh',                 // Sin números ni caracteres especiales
    'Abcd1234',                 // Sin caracteres especiales
    'Abcd123!',                 // Válida
    'abc123!@#',                // Sin mayúsculas
    'ABCD123!@',                // Sin minúsculas
    'Abcdefgh!',                // Sin números
    'Ab1!defghijklmno'          // Válida y larga
];

passwordsPrueba.forEach(password => {
    const resultado = validarPassword(password);
    console.log(`\nContraseña: ${password}`);
    console.log('Resultado:', resultado.valida ? 'Válida' : 'Inválida');
    console.log('Requisitos cumplidos:', resultado.requisitos);
});

// 4. Ejercicios adicionales de RegEx

// A. Validar números de teléfono
const phoneRegex = /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

function validarTelefono(telefono) {
    return phoneRegex.test(telefono);
}

console.log('\n--- Pruebas de Validación de Teléfonos ---');
const telefonosPrueba = [
    '+1-123-456-7890',
    '(123) 456-7890',
    '123.456.7890',
    '1234567890',
    '+34 123 456 789',
    '123-456-789'  // Inválido
];

telefonosPrueba.forEach(telefono => {
    console.log(`${telefono}: ${validarTelefono(telefono) ? 'Válido' : 'Inválido'}`);
});

// B. Extraer URLs de un texto
const urlRegex = /(https?:\/\/[^\s]+)/g;

function extraerUrls(texto) {
    return texto.match(urlRegex) || [];
}

console.log('\n--- Pruebas de Extracción de URLs ---');
const textoConUrls = `
    Visita http://ejemplo.com y https://otra-web.com/pagina
    También puedes ir a https://sub.dominio.com/ruta?param=1
`;

console.log('URLs encontradas:', extraerUrls(textoConUrls));

// C. Validar formato de fecha (DD/MM/YYYY)
const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

function validarFecha(fecha) {
    return fechaRegex.test(fecha);
}

console.log('\n--- Pruebas de Validación de Fechas ---');
const fechasPrueba = [
    '25/12/2023',
    '31/06/2024',
    '00/12/2023',
    '32/12/2023',
    '12/13/2023',
    '1/1/2023'
];

fechasPrueba.forEach(fecha => {
    console.log(`${fecha}: ${validarFecha(fecha) ? 'Válido' : 'Inválido'}`);
});