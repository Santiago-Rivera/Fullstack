// Ejercicios de Objetos en JavaScript

// 1. Creación básica de objetos
console.log("--- Ejercicio 1: Creación básica de objetos ---");
const persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "desarrollador",
    presentarse: function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.presentarse());
console.log("Profesión:", persona.profesion);

// 2. Object.create()
console.log("\n--- Ejercicio 2: Object.create() ---");
const animalProto = {
    hacerSonido() {
        return "Algún sonido";
    },
    obtenerInfo() {
        return `${this.nombre} es un ${this.especie}`;
    }
};

const perro = Object.create(animalProto);
perro.nombre = "Max";
perro.especie = "perro";
perro.hacerSonido = function() {
    return "¡Guau!";
};

console.log(perro.obtenerInfo());
console.log("Sonido:", perro.hacerSonido());

// 3. Getters y Setters
console.log("\n--- Ejercicio 3: Getters y Setters ---");
const cuenta = {
    _saldo: 0,
    get saldo() {
        return `$${this._saldo}`;
    },
    set saldo(valor) {
        if (valor >= 0) {
            this._saldo = valor;
        } else {
            console.log("El saldo no puede ser negativo");
        }
    }
};

cuenta.saldo = 100;
console.log("Saldo actual:", cuenta.saldo);
cuenta.saldo = -50; // Intentar establecer un valor negativo

// 4. Métodos de Object
console.log("\n--- Ejercicio 4: Métodos de Object ---");
const producto = {
    nombre: "Laptop",
    precio: 1000,
    marca: "TechBrand"
};

console.log("Claves:", Object.keys(producto));
console.log("Valores:", Object.values(producto));
console.log("Entradas:", Object.entries(producto));

// 5. Fusión de objetos
console.log("\n--- Ejercicio 5: Fusión de objetos ---");
const datosPersonales = {
    nombre: "Ana",
    edad: 28
};

const datosProfesionales = {
    profesion: "diseñadora",
    empresa: "CreativeCo"
};

const perfilCompleto = Object.assign({}, datosPersonales, datosProfesionales);
console.log("Perfil completo:", perfilCompleto);

// 6. Destructuración de objetos
console.log("\n--- Ejercicio 6: Destructuración ---");
const { nombre, edad, profesion: trabajo } = perfilCompleto;
console.log(`${nombre} tiene ${edad} años y trabaja como ${trabajo}`);

// 7. Métodos concisos y propiedades computadas
console.log("\n--- Ejercicio 7: Métodos concisos y propiedades computadas ---");
const prefijo = "usuario";
const usuario = {
    [`${prefijo}_id`]: 12345,
    nombre: "Carlos",
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log("ID:", usuario.usuario_id);
console.log(usuario.saludar());

// 8. Objetos anidados
console.log("\n--- Ejercicio 8: Objetos anidados ---");
const empresa = {
    nombre: "TechCorp",
    ubicacion: {
        ciudad: "Madrid",
        pais: "España",
        direccion: {
            calle: "Principal",
            numero: 123
        }
    },
    empleados: ["Juan", "Ana", "Carlos"]
};

console.log("Dirección completa:", 
    `${empresa.ubicacion.direccion.calle} ${empresa.ubicacion.direccion.numero}, ${empresa.ubicacion.ciudad}`);

// 9. Clonación profunda de objetos
console.log("\n--- Ejercicio 9: Clonación profunda ---");
function clonarProfundo(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const empresaClonada = clonarProfundo(empresa);
empresaClonada.ubicacion.ciudad = "Barcelona";
console.log("Ciudad original:", empresa.ubicacion.ciudad);
console.log("Ciudad clonada:", empresaClonada.ubicacion.ciudad);

// 10. Object.freeze() y Object.seal()
console.log("\n--- Ejercicio 10: Freeze y Seal ---");
const configuracion = {
    tema: "claro",
    notificaciones: true,
    volumen: 80
};

Object.freeze(configuracion);
try {
    configuracion.tema = "oscuro"; // Esto no funcionará
} catch (e) {
    console.log("No se puede modificar un objeto congelado");
}

// 11. Herencia con prototype
console.log("\n--- Ejercicio 11: Herencia con prototype ---");
function Vehiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Vehiculo.prototype.obtenerInfo = function() {
    return `${this.marca} ${this.modelo}`;
};

function Coche(marca, modelo, color) {
    Vehiculo.call(this, marca, modelo);
    this.color = color;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

const miCoche = new Coche("Toyota", "Corolla", "Rojo");
console.log(miCoche.obtenerInfo(), "Color:", miCoche.color);

// 12. Class syntax (ES6)
console.log("\n--- Ejercicio 12: Clases ES6 ---");
class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerInfo() {
        return `${this.nombre} tiene ${this.edad} años`;
    }
}

class Gato extends Mascota {
    constructor(nombre, edad, color) {
        super(nombre, edad);
        this.color = color;
    }

    maullar() {
        return "¡Miau!";
    }
}

const miGato = new Gato("Luna", 3, "gris");
console.log(miGato.obtenerInfo());
console.log("Sonido:", miGato.maullar());

// 13. Ejercicio práctico: Sistema de biblioteca
console.log("\n--- Ejercicio 13: Sistema de biblioteca ---");
class Biblioteca {
    constructor() {
        this.libros = new Map();
    }

    agregarLibro(id, titulo, autor) {
        this.libros.set(id, { titulo, autor, prestado: false });
    }

    prestarLibro(id) {
        if (this.libros.has(id)) {
            const libro = this.libros.get(id);
            if (!libro.prestado) {
                libro.prestado = true;
                return `Libro "${libro.titulo}" prestado con éxito`;
            }
            return "El libro ya está prestado";
        }
        return "Libro no encontrado";
    }

    listarLibros() {
        for (let [id, libro] of this.libros) {
            console.log(`ID: ${id}, Título: ${libro.titulo}, Autor: ${libro.autor}, Prestado: ${libro.prestado}`);
        }
    }
}

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(1, "Don Quijote", "Cervantes");
biblioteca.agregarLibro(2, "Cien años de soledad", "García Márquez");
console.log(biblioteca.prestarLibro(1));
biblioteca.listarLibros();
