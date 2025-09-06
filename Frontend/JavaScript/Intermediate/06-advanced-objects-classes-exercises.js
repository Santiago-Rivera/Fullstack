// 1. Agregega una función al prototipo de un objeto
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
};

const persona1 = new Persona('Ana', 25);
console.log(persona1.saludar()); // Hola, soy Ana y tengo 25 años

// 2. Crea un objeto que herede de otro
const animal = {
    tipo: 'Animal',
    respirar() {
        return `${this.tipo} está respirando`;
    }
};

const perro = Object.create(animal);
perro.tipo = 'Perro';
perro.ladrar = function() {
    return 'Guau guau!';
};

console.log(perro.respirar()); // Perro está respirando
console.log(perro.ladrar()); // Guau guau!

// 3. Define un método de instancia en un objeto
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    
    multiplicar(a, b) {
        return a * b;
    }
}

const calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8
console.log(calc.multiplicar(4, 2)); // 8

// 4. Haz uso de get y set en un objeto
class Cuenta {
    #saldo = 0;
    
    get saldo() {
        return `$${this.#saldo}`;
    }
    
    set saldo(valor) {
        if (valor < 0) throw new Error('El saldo no puede ser negativo');
        this.#saldo = valor;
    }
}

const cuenta = new Cuenta();
cuenta.saldo = 1000;
console.log(cuenta.saldo); // $1000

// 5. Utiliza la operación assign en un objeto
const objetoBase = { a: 1, b: 2 };
const extension1 = { c: 3 };
const extension2 = { b: 4, d: 5 };

const objetoCompleto = Object.assign({}, objetoBase, extension1, extension2);
console.log(objetoCompleto); // { a: 1, b: 4, c: 3, d: 5 }

// 6. Crea una clase abstracta
class FiguraGeometrica {
    constructor() {
        if (this.constructor === FiguraGeometrica) {
            throw new Error('No se puede instanciar una clase abstracta');
        }
    }
    
    calcularArea() {
        throw new Error('Método abstracto debe ser implementado');
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    
    calcularArea() {
        return this.base * this.altura;
    }
}

const rectangulo = new Rectangulo(5, 3);
console.log(rectangulo.calcularArea()); // 15

// 7. Utiliza polimorfismo en dos clases diferentes
class Animal {
    hacerSonido() {
        return 'Algún sonido';
    }
}

class Gato extends Animal {
    hacerSonido() {
        return 'Miau!';
    }
}

class Perro extends Animal {
    hacerSonido() {
        return 'Guau!';
    }
}

const animales = [new Gato(), new Perro()];
animales.forEach(animal => console.log(animal.hacerSonido()));

// 8. Implementa un Mixin
const hablarMixin = {
    hablar() {
        return `${this.nombre} está hablando`;
    }
};

const caminarMixin = {
    caminar() {
        return `${this.nombre} está caminando`;
    }
};

class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Empleado.prototype, hablarMixin, caminarMixin);

const empleado = new Empleado('Juan');
console.log(empleado.hablar()); // Juan está hablando
console.log(empleado.caminar()); // Juan está caminando

// 9. Crea un Singleton
class Database {
    static #instance;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        this.conexiones = 0;
        Database.#instance = this;
    }
    
    conectar() {
        this.conexiones++;
        return `Conectado. Conexiones activas: ${this.conexiones}`;
    }
    
    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true
console.log(db1.conectar()); // Conectado. Conexiones activas: 1
console.log(db2.conectar()); // Conectado. Conexiones activas: 2

// 10. Desarrolla un Proxy
const usuario = {
    nombre: 'Admin',
    edad: 30
};

const usuarioProxy = new Proxy(usuario, {
    get(target, property) {
        console.log(`Accediendo a la propiedad: ${property}`);
        return target[property];
    },
    
    set(target, property, value) {
        console.log(`Modificando la propiedad: ${property} = ${value}`);
        if (property === 'edad' && value < 0) {
            throw new Error('La edad no puede ser negativa');
        }
        target[property] = value;
        return true;
    }
});

console.log(usuarioProxy.nombre); // Accediendo a la propiedad: nombre
usuarioProxy.edad = 31; // Modificando la propiedad: edad = 31