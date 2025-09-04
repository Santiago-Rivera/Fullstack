// Arrays

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [1, 2, 3]
myArray2 = new Array(1, 2, 3)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(10, 20, 30)
myArray2[0] = 10
myArray2[1] = 20
myArray2[2] = 30

console.log(myArray2)

// Metodos comunes

myArray = []

// Push y Pop

myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
console.log(myArray)

myArray.pop()
console.log(myArray)

// Shift y Unshift

myArray.unshift(0,1)
console.log(myArray)

myArray.shift()
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = [1, 2, 3, 4, 5]
let newArray = myArray.slice(1, 3) // desde el índice 1 hasta el índice 3 (no incluido)
console.log(myArray)
console.log(newArray)

// splice

myArray.splice(1, 2) // desde el índice 1 elimina 2 elementos
console.log(myArray)