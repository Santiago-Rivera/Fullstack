// Ejercicios de Módulos en JavaScript

// Importaciones
import matematicas, { sumar, restar } from './modules/matematicas.js';
import { validarEmail, validarPassword, Validador } from './modules/validador.js';
import { Usuario, roles, crearUsuario } from './modules/usuario.js';
import { Logger, niveles } from './modules/logger.js';

// 1. Ejercicio: Uso básico de módulos matemáticos
console.log('--- Ejercicio 1: Módulos Matemáticos ---');
console.log('Suma directa:', sumar(5, 3));
console.log('Resta directa:', restar(10, 4));
console.log('Multiplicación desde objeto:', matematicas.multiplicar(6, 2));
console.log('División desde objeto:', matematicas.dividir(15, 3));

// 2. Ejercicio: Sistema de validación
console.log('\n--- Ejercicio 2: Sistema de Validación ---');
const datosFormulario = {
    email: 'usuario@ejemplo.com',
    password: 'Password123',
    telefono: '+1234567890'
};

console.log('¿Email válido?', validarEmail(datosFormulario.email));
console.log('¿Contraseña válida?', validarPassword(datosFormulario.password));
console.log('Validación completa:', Validador.validarFormulario(datosFormulario));

// 3. Ejercicio: Gestión de usuarios
console.log('\n--- Ejercicio 3: Gestión de Usuarios ---');
const nuevoUsuario = crearUsuario({
    nombre: 'Ana García',
    email: 'ana@ejemplo.com',
    edad: 28
});

console.log('Información de usuario:', nuevoUsuario.obtenerInfo());
console.log('Roles disponibles:', roles);

// 4. Ejercicio: Sistema de logging
console.log('\n--- Ejercicio 4: Sistema de Logging ---');
Logger.log('Aplicación iniciada', niveles.INFO);
Logger.log('Advertencia: memoria baja', niveles.WARN);
Logger.log('Error en la base de datos', niveles.ERROR);

// 5. EJERCICIO: Sistema de Gestión de Biblioteca
/*
Crear los siguientes módulos:

1. libro.js
   - Clase Libro con propiedades: título, autor, ISBN
   - Función para validar ISBN
   - Exportar clase y función de validación

2. biblioteca.js
   - Clase Biblioteca que gestiona colección de libros
   - Métodos para agregar, eliminar y buscar libros
   - Exportar clase como default

3. prestamo.js
   - Clase Prestamo que registra préstamos de libros
   - Función para calcular fecha de devolución
   - Exportar ambos elementos

4. main.js
   - Importar todos los módulos
   - Crear una biblioteca
   - Agregar libros
   - Realizar préstamos
   - Mostrar estado actual
*/

// 6. EJERCICIO: Sistema de Comercio Electrónico
/*
Crear los siguientes módulos:

1. producto.js
   - Clase Producto con propiedades: nombre, precio, stock
   - Métodos para actualizar stock y calcular precio con IVA
   - Exportar clase y constantes relacionadas

2. carrito.js
   - Clase Carrito para gestionar productos
   - Métodos para agregar, eliminar y calcular total
   - Exportar clase como default

3. pedido.js
   - Clase Pedido para procesar compras
   - Métodos para validar stock y confirmar pedido
   - Exportar clase y funciones auxiliares

4. tienda.js
   - Importar todos los módulos
   - Crear productos
   - Procesar un pedido completo
   - Actualizar inventario
*/

// Implementa estos ejercicios creando los módulos correspondientes
// y utilizándolos en este archivo principal
