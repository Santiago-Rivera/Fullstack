// Ejercicios de Destructuring y Spreading en JavaScript

// 1. Destructuring de Arrays
console.log("--- Ejercicio 1: Destructuring de Arrays ---");
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;

console.log("Primer número:", primero);
console.log("Segundo número:", segundo);
console.log("Resto de números:", resto);

// 2. Destructuring con valores por defecto
console.log("\n--- Ejercicio 2: Valores por defecto ---");
const configuracion = ["localhost", 3000];
const [host = "127.0.0.1", puerto = 8080, timeout = 5000] = configuracion;

console.log("Host:", host);
console.log("Puerto:", puerto);
console.log("Timeout:", timeout);

// 3. Destructuring de objetos
console.log("\n--- Ejercicio 3: Destructuring de objetos ---");
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid",
    profesion: "desarrolladora"
};

const { nombre, edad, ...otrosDatos } = persona;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Otros datos:", otrosDatos);

// 4. Renombrar variables en destructuring
console.log("\n--- Ejercicio 4: Renombrar variables ---");
const usuario = {
    id: 1,
    username: "usuario123",
    email: "usuario@email.com"
};

const { username: nombreUsuario, email: correo } = usuario;
console.log("Nombre de usuario:", nombreUsuario);
console.log("Correo:", correo);

// 5. Destructuring en parámetros de función
console.log("\n--- Ejercicio 5: Destructuring en funciones ---");
function mostrarInfo({ nombre, edad = 25, ciudad = "Desconocida" }) {
    console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}`);
}

mostrarInfo({ nombre: "Carlos", ciudad: "Barcelona" });

// 6. Destructuring anidado
console.log("\n--- Ejercicio 6: Destructuring anidado ---");
const empresa = {
    nombre: "TechCorp",
    ubicacion: {
        pais: "España",
        ciudad: "Madrid",
        direccion: {
            calle: "Principal",
            numero: 123
        }
    }
};

const { ubicacion: { ciudad: ciudadEmpresa, direccion: { calle } } } = empresa;
console.log("Ciudad de la empresa:", ciudadEmpresa);
console.log("Calle:", calle);

// 7. Spread operator con arrays
console.log("\n--- Ejercicio 7: Spread con arrays ---");
const frutas = ["manzana", "banana"];
const masFrutas = ["naranja", "pera"];
const todasLasFrutas = [...frutas, ...masFrutas, "uva"];

console.log("Todas las frutas:", todasLasFrutas);

// 8. Spread operator con objetos
console.log("\n--- Ejercicio 8: Spread con objetos ---");
const datosPersonales = {
    nombre: "Luis",
    edad: 30
};

const datosProfesionales = {
    empresa: "TechCorp",
    puesto: "desarrollador"
};

const perfilCompleto = {
    ...datosPersonales,
    ...datosProfesionales,
    ciudad: "Valencia"
};

console.log("Perfil completo:", perfilCompleto);

// 9. Copiar arrays y objetos con spread
console.log("\n--- Ejercicio 9: Copiar con spread ---");
const arrayOriginal = [1, 2, 3];
const arrayCopiado = [...arrayOriginal];
arrayCopiado.push(4);

console.log("Array original:", arrayOriginal);
console.log("Array copiado:", arrayCopiado);

const objetoOriginal = { a: 1, b: 2 };
const objetoCopiado = { ...objetoOriginal };
objetoCopiado.c = 3;

console.log("Objeto original:", objetoOriginal);
console.log("Objeto copiado:", objetoCopiado);

// 10. Ejercicio práctico: Gestión de tareas
console.log("\n--- Ejercicio 10: Gestión de tareas ---");
const tareas = [
    { id: 1, titulo: "Completar informe", completada: false },
    { id: 2, titulo: "Reunión con cliente", completada: true }
];

function agregarTarea(tareas, nuevaTarea) {
    return [...tareas, { id: tareas.length + 1, ...nuevaTarea }];
}

function actualizarTarea(tareas, id, cambios) {
    return tareas.map(tarea => 
        tarea.id === id ? { ...tarea, ...cambios } : tarea
    );
}

const tareasActualizadas = agregarTarea(tareas, { 
    titulo: "Enviar email", 
    completada: false 
});

const tareasFinales = actualizarTarea(tareasActualizadas, 1, { 
    completada: true 
});

console.log("Tareas finales:", tareasFinales);

// 11. Ejercicio combinado: Sistema de mensajes
console.log("\n--- Ejercicio 11: Sistema de mensajes ---");
const mensajeBase = {
    id: null,
    tiempo: null,
    leido: false
};

function crearMensaje(contenido, autor) {
    return {
        ...mensajeBase,
        id: Date.now(),
        tiempo: new Date().toISOString(),
        contenido,
        autor
    };
}

const mensaje = crearMensaje("Hola mundo", "Juan");
const { tiempo, contenido, autor, ...metadatos } = mensaje;

console.log("Contenido del mensaje:", contenido);
console.log("Autor:", autor);
console.log("Metadatos:", metadatos);

// 12. Challenge final: Gestión de carrito de compras
console.log("\n--- Ejercicio 12: Carrito de compras ---");
const carrito = {
    items: [],
    total: 0,
    agregarProducto(producto) {
        this.items = [...this.items, { ...producto, id: Date.now() }];
        this.calcularTotal();
    },
    eliminarProducto(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.calcularTotal();
    },
    calcularTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.precio, 0);
    }
};

carrito.agregarProducto({ nombre: "Laptop", precio: 1000 });
carrito.agregarProducto({ nombre: "Mouse", precio: 20 });

const { items, total } = carrito;
console.log("Items en carrito:", items);
console.log("Total:", total);
