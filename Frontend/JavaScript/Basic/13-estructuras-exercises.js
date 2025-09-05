// Ejercicios de Arrays, Sets y Maps en JavaScript

// =================== ARRAYS ===================
console.log("=== EJERCICIOS DE ARRAYS ===");

// 1. Manipulación básica de arrays
let frutas = ['manzana', 'banana', 'naranja', 'pera'];
console.log("\n--- 1. Manipulación de Arrays ---");
console.log("Array original:", frutas);

// Agregar y eliminar elementos
frutas.push('uva');
console.log("Después de push:", frutas);

frutas.unshift('fresa');
console.log("Después de unshift:", frutas);

let ultimaFruta = frutas.pop();
console.log("Elemento eliminado con pop:", ultimaFruta);
console.log("Array después de pop:", frutas);

let primeraFruta = frutas.shift();
console.log("Elemento eliminado con shift:", primeraFruta);
console.log("Array después de shift:", frutas);

// 2. Métodos de transformación
console.log("\n--- 2. Métodos de transformación ---");
let numeros = [1, 2, 3, 4, 5];

// Map: duplicar cada número
let duplicados = numeros.map(num => num * 2);
console.log("Números originales:", numeros);
console.log("Números duplicados:", duplicados);

// Filter: obtener números pares
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// Reduce: suma de todos los números
let suma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("Suma total:", suma);

// 3. Ordenamiento y búsqueda
console.log("\n--- 3. Ordenamiento y búsqueda ---");
let estudiantes = [
    { nombre: 'Ana', edad: 23 },
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Berta', edad: 25 }
];

// Ordenar por edad
estudiantes.sort((a, b) => a.edad - b.edad);
console.log("Estudiantes ordenados por edad:", estudiantes);

// Encontrar estudiante
let estudianteMayor = estudiantes.find(est => est.edad > 22);
console.log("Primer estudiante mayor de 22:", estudianteMayor);

// =================== SETS ===================
console.log("\n=== EJERCICIOS DE SETS ===");

// 1. Operaciones básicas con Sets
console.log("\n--- 1. Operaciones con Sets ---");
let numerosUnicos = new Set([1, 2, 2, 3, 3, 4, 5, 5]);
console.log("Set original:", numerosUnicos);

// Agregar y eliminar elementos
numerosUnicos.add(6);
console.log("Después de add:", numerosUnicos);

numerosUnicos.delete(1);
console.log("Después de delete:", numerosUnicos);

console.log("¿Contiene el número 4?:", numerosUnicos.has(4));

// 2. Eliminar duplicados de un array
console.log("\n--- 2. Eliminar duplicados ---");
let arrayConDuplicados = ['a', 'b', 'a', 'c', 'b', 'd'];
let arraySinDuplicados = [...new Set(arrayConDuplicados)];
console.log("Array original:", arrayConDuplicados);
console.log("Array sin duplicados:", arraySinDuplicados);

// 3. Operaciones con Sets
console.log("\n--- 3. Operaciones entre Sets ---");
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

// Unión de sets
let union = new Set([...set1, ...set2]);
console.log("Unión:", union);

// Intersección de sets
let interseccion = new Set([...set1].filter(x => set2.has(x)));
console.log("Intersección:", interseccion);

// =================== MAPS ===================
console.log("\n=== EJERCICIOS DE MAPS ===");

// 1. Operaciones básicas con Maps
console.log("\n--- 1. Operaciones con Maps ---");
let usuarios = new Map();

// Agregar elementos
usuarios.set('ana@email.com', { nombre: 'Ana', nivel: 'admin' });
usuarios.set('juan@email.com', { nombre: 'Juan', nivel: 'usuario' });
usuarios.set('maria@email.com', { nombre: 'María', nivel: 'moderador' });

console.log("Map completo:", usuarios);
console.log("Valor para ana@email.com:", usuarios.get('ana@email.com'));
console.log("¿Existe juan@email.com?:", usuarios.has('juan@email.com'));

// 2. Iteración sobre Maps
console.log("\n--- 2. Iteración sobre Maps ---");
console.log("\nListado de usuarios:");
usuarios.forEach((valor, clave) => {
    console.log(`${clave}: ${valor.nombre} - ${valor.nivel}`);
});

// 3. Ejercicio práctico: Sistema de inventario
console.log("\n--- 3. Sistema de inventario ---");
let inventario = new Map();

// Agregar productos
function agregarProducto(id, nombre, cantidad, precio) {
    inventario.set(id, { nombre, cantidad, precio });
}

// Actualizar stock
function actualizarStock(id, cantidad) {
    if (inventario.has(id)) {
        let producto = inventario.get(id);
        producto.cantidad += cantidad;
        inventario.set(id, producto);
        return true;
    }
    return false;
}

// Calcular valor total del inventario
function valorTotal() {
    let total = 0;
    inventario.forEach(producto => {
        total += producto.cantidad * producto.precio;
    });
    return total;
}

// Uso del sistema de inventario
agregarProducto(1, "Laptop", 5, 1000);
agregarProducto(2, "Mouse", 10, 20);
agregarProducto(3, "Teclado", 8, 50);

console.log("Inventario inicial:", inventario);

actualizarStock(1, -2); // Vender 2 laptops
actualizarStock(2, 5);  // Agregar 5 mouse

console.log("Inventario actualizado:", inventario);
console.log("Valor total del inventario: $" + valorTotal());

// 4. Ejercicio combinado: Gestión de estudiantes
console.log("\n--- 4. Gestión de estudiantes ---");

// Crear estructura de datos para cursos y estudiantes
let cursos = new Map();
let estudiantesSet = new Set();

// Agregar estudiantes a cursos
function inscribirEstudiante(curso, estudiante) {
    estudiantesSet.add(estudiante);
    
    if (!cursos.has(curso)) {
        cursos.set(curso, new Set());
    }
    cursos.get(curso).add(estudiante);
}

// Inscribir algunos estudiantes
inscribirEstudiante("JavaScript", "Ana");
inscribirEstudiante("JavaScript", "Carlos");
inscribirEstudiante("Python", "Ana");
inscribirEstudiante("Python", "Berta");
inscribirEstudiante("Java", "Carlos");

// Mostrar información
console.log("\nEstudiantes totales:", estudiantesSet);
console.log("\nEstudiantes por curso:");
cursos.forEach((estudiantes, curso) => {
    console.log(`${curso}: ${[...estudiantes].join(", ")}`);
});
