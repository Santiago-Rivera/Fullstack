// Funciones a probar

// 1. Función para verificar si un número es par
function isEven(number) {
    return number % 2 === 0;
}

// 2. Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) throw new Error('El factorial no está definido para números negativos');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 3. Clase Calculadora para probar métodos de clase
class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) throw new Error('No se puede dividir por cero');
        return a / b;
    }
}

// 4. Función asíncrona para simular una operación de base de datos
async function fetchUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error('ID de usuario inválido'));
            } else {
                resolve({
                    id: id,
                    nombre: `Usuario ${id}`,
                    edad: 20 + id
                });
            }
        }, 100);
    });
}

// Tests con Jest
describe('Pruebas de la función isEven', () => {
    test('debería retornar true para números pares', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(4)).toBe(true);
        expect(isEven(100)).toBe(true);
    });

    test('debería retornar false para números impares', () => {
        expect(isEven(1)).toBe(false);
        expect(isEven(3)).toBe(false);
        expect(isEven(99)).toBe(false);
    });

    test('debería manejar el cero', () => {
        expect(isEven(0)).toBe(true);
    });
});

describe('Pruebas de la función factorial', () => {
    test('debería calcular el factorial correctamente', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);
    });

    test('debería lanzar error para números negativos', () => {
        expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
    });
});

describe('Pruebas de la clase Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('debería sumar correctamente', () => {
        expect(calc.sumar(2, 3)).toBe(5);
        expect(calc.sumar(-1, 1)).toBe(0);
        expect(calc.sumar(0, 0)).toBe(0);
    });

    test('debería restar correctamente', () => {
        expect(calc.restar(5, 3)).toBe(2);
        expect(calc.restar(1, 1)).toBe(0);
        expect(calc.restar(0, 5)).toBe(-5);
    });

    test('debería multiplicar correctamente', () => {
        expect(calc.multiplicar(2, 3)).toBe(6);
        expect(calc.multiplicar(-2, 3)).toBe(-6);
        expect(calc.multiplicar(0, 5)).toBe(0);
    });

    test('debería dividir correctamente', () => {
        expect(calc.dividir(6, 2)).toBe(3);
        expect(calc.dividir(5, 2)).toBe(2.5);
        expect(() => calc.dividir(4, 0)).toThrow('No se puede dividir por cero');
    });
});

describe('Pruebas de fetchUsuario', () => {
    test('debería resolver con datos de usuario válidos', async () => {
        const usuario = await fetchUsuario(1);
        expect(usuario).toEqual({
            id: 1,
            nombre: 'Usuario 1',
            edad: 21
        });
    });

    test('debería rechazar con ID inválido', async () => {
        await expect(fetchUsuario(0)).rejects.toThrow('ID de usuario inválido');
    });
});

// 5. EJERCICIO: Implementa y prueba una función de validación
/*
Crea una función validateUser que reciba un objeto usuario y valide:
- nombre: string, mínimo 3 caracteres
- edad: número entre 0 y 120
- email: string con formato válido de email

La función debe devolver un objeto con:
- isValid: boolean
- errors: array de strings con los errores encontrados
*/

// 6. EJERCICIO: Implementa y prueba una clase Lista
/*
Crea una clase Lista que implemente:
- add(item): añade un elemento
- remove(index): elimina un elemento
- get(index): obtiene un elemento
- clear(): vacía la lista
- size(): devuelve el tamaño

Escribe pruebas para todos los métodos, incluyendo casos límite
*/