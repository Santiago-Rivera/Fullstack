// 1. Crea una función que retorne a otra función
function crearSaludador(saludo) {
    return function(nombre) {
        return `${saludo}, ${nombre}!`;
    };
}

const saludarHola = crearSaludador('Hola');
const saludarBuenasTardes = crearSaludador('Buenas tardes');

console.log(saludarHola('Ana')); // Hola, Ana!
console.log(saludarBuenasTardes('Carlos')); // Buenas tardes, Carlos!

// 2. Implementa una función currificada que multiplique 3 números
const multiplicarTres = a => b => c => a * b * c;

console.log(multiplicarTres(2)(3)(4)); // 24
const multiplicarPorDos = multiplicarTres(2);
const multiplicarPorSeis = multiplicarPorDos(3);
console.log(multiplicarPorSeis(5)); // 30

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente) {
    if (exponente === 0) return 1;
    if (exponente === 1) return base;
    return base * potencia(base, exponente - 1);
}

console.log(potencia(2, 3)); // 8
console.log(potencia(3, 4)); // 81

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue()
function createCounter(valorInicial = 0) {
    let contador = valorInicial;
    
    return {
        increment: () => ++contador,
        decrement: () => --contador,
        getValue: () => contador
    };
}

const contador = createCounter(5);
console.log(contador.getValue()); // 5
console.log(contador.increment()); // 6
console.log(contador.increment()); // 7
console.log(contador.decrement()); // 6

// 5. Crea una función sumManyTimes que primero sume todos los números y luego multiplique el resultado
function sumManyTimes(multiplier, ...numbers) {
    const suma = numbers.reduce((acc, curr) => acc + curr, 0);
    return suma * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3, 4)); // 20
console.log(sumManyTimes(3, 5, 5, 5)); // 45

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números
function sumarConCallback(callback, ...numeros) {
    const resultado = numeros.reduce((acc, curr) => acc + curr, 0);
    callback(resultado);
}

sumarConCallback((resultado) => {
    console.log('La suma es:', resultado);
}, 1, 2, 3, 4, 5); // La suma es: 15

// 7. Desarrolla una función parcial
function multiplicar(a, b, c) {
    return a * b * c;
}

function parcial(fn, ...args) {
    return function(...moreArgs) {
        return fn(...args, ...moreArgs);
    };
}

const multiplicarPorCincoYDos = parcial(multiplicar, 5, 2);
console.log(multiplicarPorCincoYDos(3)); // 30

// 8. Implementa un ejemplo que haga uso de Spread
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];
console.log(masNumeros); // [1, 2, 3, 4, 5]

const persona = { nombre: 'Ana', edad: 25 };
const personaConDireccion = {
    ...persona,
    direccion: 'Calle Principal 123'
};
console.log(personaConDireccion);

// 9. Implementa un retorno implícito
const duplicar = x => x * 2;
const sumar = (a, b) => a + b;
const saludar = nombre => `¡Hola ${nombre}!`;

console.log(duplicar(4)); // 8
console.log(sumar(5, 3)); // 8
console.log(saludar('María')); // ¡Hola María!

// 10. Haz uso del this léxico
const objeto = {
    valor: 42,
    getValorTradicional: function() {
        setTimeout(function() {
            console.log(this.valor); // undefined
        }, 100);
    },
    getValorArrow: function() {
        setTimeout(() => {
            console.log(this.valor); // 42
        }, 100);
    }
};

objeto.getValorTradicional();
objeto.getValorArrow();