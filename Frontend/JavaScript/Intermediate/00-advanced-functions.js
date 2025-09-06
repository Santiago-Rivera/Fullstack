// Funciones avanzadas

// Ciudadanos de primea clase

const greet = function (name) {
    console.log(`Hola ${name}`);
}

greet('Ana');

function processGreeting(greetFunction, name) {
    greetFunction(name);
}

function returnGreetFunction() {
    return greet;
}
processGreeting(greet, 'Juan');

const greet2 = returnGreetFunction();
greet2('María');

// Arrow functions advanced

// - Retorno implícito
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// - this lexico
const handler = {
    name : "Santiago",
    greeting: function() {
        console.log(`Hola, ${this.name}`);
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`);
    },
}

handler.greeting();
handler.arrowGreeting();

// IIFE (Immediately Invoked Function Expression)

(function() {
    console.log('IIFE tradicional');
})();

(()  => {
    console.log('IIFE con arrow function');
})();

// Parámetros Rest (...)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})