// Ejercicios de Clases en JavaScript

// 1. Crea una clase básica 'Persona' con un constructor que acepte nombre y edad
// Agrega un método que imprima los detalles de la persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Prueba la clase Persona
const persona1 = new Persona("Ana", 25);
persona1.mostrarDetalles();

// 2. Crea una clase 'Cuenta' con propiedades privadas usando #
// Implementa métodos para depositar y retirar dinero
class Cuenta {
    #saldo;
    #numeroCuenta;

    constructor(numeroCuenta, saldoInicial) {
        this.#numeroCuenta = numeroCuenta;
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return true;
        }
        return false;
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            return true;
        }
        return false;
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}

// Prueba la clase Cuenta
const cuenta1 = new Cuenta("001", 1000);
console.log(cuenta1.obtenerSaldo()); // 1000
cuenta1.depositar(500);
console.log(cuenta1.obtenerSaldo()); // 1500
cuenta1.retirar(200);
console.log(cuenta1.obtenerSaldo()); // 1300

// 3. Crea una clase 'Empleado' que herede de 'Persona'
// Agrega propiedades y métodos específicos para empleados
class Empleado extends Persona {
    constructor(nombre, edad, salario, puesto) {
        super(nombre, edad);
        this.salario = salario;
        this.puesto = puesto;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Puesto: ${this.puesto}, Salario: $${this.salario}`);
    }
}

// Prueba la clase Empleado
const empleado1 = new Empleado("Carlos", 30, 3000, "Desarrollador");
empleado1.mostrarDetalles();
console.log(`Salario anual: $${empleado1.calcularSalarioAnual()}`);

// 4. Crea una clase 'Forma' con un método estático y getters/setters
class Forma {
    constructor(color) {
        this._color = color;
    }

    static crearFormaRoja() {
        return new Forma("rojo");
    }

    get color() {
        return this._color;
    }

    set color(nuevoColor) {
        this._color = nuevoColor;
    }

    describir() {
        console.log(`Esta forma es de color ${this.color}`);
    }
}

// Prueba la clase Forma
const forma1 = Forma.crearFormaRoja();
forma1.describir();
forma1.color = "azul";
forma1.describir();

// 5. Ejercicio práctico: Crea un sistema de inventario
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregarProducto(producto) {
        this.productos.set(producto.nombre, producto);
    }

    obtenerProducto(nombre) {
        return this.productos.get(nombre);
    }

    actualizarCantidad(nombre, nuevaCantidad) {
        const producto = this.productos.get(nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
            return true;
        }
        return false;
    }

    listarProductos() {
        for (const [nombre, producto] of this.productos) {
            console.log(`${nombre}: $${producto.precio} - Cantidad: ${producto.cantidad}`);
        }
    }
}

// Prueba el sistema de inventario
const inventario = new Inventario();
inventario.agregarProducto(new Producto("Laptop", 1000, 5));
inventario.agregarProducto(new Producto("Mouse", 20, 10));
inventario.listarProductos();
inventario.actualizarCantidad("Laptop", 4);
console.log(inventario.obtenerProducto("Laptop"));

// 6. EJERCICIO: Implementa las siguientes clases
/*
1. Crea una clase 'Libro' con propiedades: título, autor, ISBN
   - Agrega un método para mostrar la información del libro
   - Implementa un método estático para crear un libro a partir de una cadena JSON

2. Crea una clase 'Biblioteca' que:
   - Mantenga una colección de libros
   - Permita agregar y eliminar libros
   - Busque libros por título o autor
   - Implemente un método para contar libros por autor
*/

// Implementa tu solución aquí

// 7. EJERCICIO: Sistema de gestión escolar
/*
1. Crea una clase 'Estudiante' que herede de Persona y agregue:
   - Número de estudiante
   - Lista de cursos
   - Método para calcular promedio de calificaciones

2. Crea una clase 'Curso' con:
   - Nombre del curso
   - Profesor
   - Lista de estudiantes
   - Métodos para agregar/eliminar estudiantes
   - Método para calcular promedio del curso

3. Crea una clase 'Escuela' que:
   - Gestione estudiantes y cursos
   - Permita matricular estudiantes en cursos
   - Genere reportes de rendimiento
*/

// Implementa tu solución aquí
