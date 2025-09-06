// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const productos = [
    { nombre: 'Laptop', precio: 1200, stock: 5 },
    { nombre: 'Mouse', precio: 20, stock: 10 },
    { nombre: 'Teclado', precio: 80, stock: 8 },
    { nombre: 'Monitor', precio: 300, stock: 3 }
];

const valorTotal = productos
    .map(p => p.precio * p.stock)         // Calcula el valor de cada producto
    .filter(valor => valor > 500)          // Filtra solo valores mayores a 500
    .reduce((acc, valor) => acc + valor, 0); // Suma todos los valores

console.log('Valor total del inventario (productos > $500):', valorTotal);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cubosPares = numeros
    .map(n => Math.pow(n, 3))     // Eleva al cubo
    .filter(n => n % 2 === 0);    // Filtra pares

console.log('Cubos pares:', cubosPares);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const estudiantes = [
    { nombre: 'Ana', cursos: ['JavaScript', 'HTML'] },
    { nombre: 'Juan', cursos: ['Python', 'CSS'] },
    { nombre: 'María', cursos: ['React', 'Node.js'] }
];

// Obtener una lista plana de todos los cursos
const todosCursos = estudiantes.flatMap(est => est.cursos);
console.log('Todos los cursos:', todosCursos);

// 4. Ordena un array de números de mayor a menor
const numerosDesordenados = [23, 5, 89, 12, 44, 1, 67];
const numerosOrdenados = numerosDesordenados.sort((a, b) => b - a);
console.log('Números ordenados de mayor a menor:', numerosOrdenados);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// Unión
const union = new Set([...set1, ...set2]);

// Intersección
const interseccion = new Set([...set1].filter(x => set2.has(x)));

// Diferencia (elementos en set1 que no están en set2)
const diferencia = new Set([...set1].filter(x => !set2.has(x)));

console.log('Unión:', union);
console.log('Intersección:', interseccion);
console.log('Diferencia:', diferencia);

// 6. Itera los resultados del ejercicio anterior
console.log('Iterando unión:');
union.forEach(valor => console.log(valor));

console.log('Iterando intersección:');
interseccion.forEach(valor => console.log(valor));

console.log('Iterando diferencia:');
diferencia.forEach(valor => console.log(valor));

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map();
usuarios.set(1, { nombre: 'Ana López', edad: 25, email: 'ana@email.com' });
usuarios.set(2, { nombre: 'Carlos Ruiz', edad: 17, email: 'carlos@email.com' });
usuarios.set(3, { nombre: 'María García', edad: 30, email: 'maria@email.com' });

console.log('Iterando usuarios:');
usuarios.forEach((valor, clave) => {
    console.log(`ID ${clave}:`, valor);
});

// 8. Dado el mapa anterior, crea un array con los nombres
const nombresUsuarios = Array.from(usuarios.values()).map(usuario => usuario.nombre);
console.log('Array de nombres:', nombresUsuarios);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsMayores = new Set(
    Array.from(usuarios.values())
        .filter(usuario => usuario.edad >= 18)
        .map(usuario => usuario.email)
);
console.log('Emails de usuarios mayores de edad:', emailsMayores);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
// Primero, transformar el mapa en objeto
const objetoUsuarios = Object.fromEntries(usuarios);

// Luego, crear nuevo mapa con email como clave
const usuariosPorEmail = new Map();
Object.values(objetoUsuarios).forEach(usuario => {
    usuariosPorEmail.set(usuario.email, usuario);
});

console.log('Usuarios por email:', usuariosPorEmail);