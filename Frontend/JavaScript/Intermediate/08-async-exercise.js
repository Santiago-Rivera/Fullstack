// 1. Crea una función para saludar que reciba un nombre y un callback
function saludar(nombre, callback) {
    setTimeout(() => {
        callback(`Hola, ${nombre}`);
    }, 2000);
}

// Ejemplo de uso
saludar("Ana", mensaje => console.log(mensaje));

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback)
function task1(callback) {
    setTimeout(() => {
        console.log("Tarea 1 completada");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Tarea 3 completada");
        callback();
    }, 1000);
}

// Ejemplo de uso con callback hell
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas completadas");
        });
    });
});

// 3. Crea una función para verificar un número que retorne una Promesa
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número par");
        } else {
            reject("Número impar");
        }
    });
}

// Ejemplo de uso
verificarNumero(4)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

// 4. Crea tres funciones que devuelvan promesas
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Primera tarea completada");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea completada");
            resolve();
        }, 2000);
    });
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea completada");
            resolve();
        }, 1500);
    });
}

// 5. Transforma el ejercicio anterior en async/await
async function executeTasks() {
    try {
        await firstTask();
        await secondTask();
        await thirdTask();
        console.log("Todas las tareas completadas");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Ejemplo de uso
executeTasks();

// 6. Función getUser(id) con promesa
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({ id, nombre: "Usuario " + id });
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

// Ejemplo de uso con async/await
async function fetchUser(id) {
    try {
        const usuario = await getUser(id);
        console.log("Usuario encontrado:", usuario);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchUser(3); // Usuario encontrado
fetchUser(6); // Error

// 7. Predicción del orden de ejecución
console.log("Inicio");
setTimeout(() => console.log("setTimeout ejecutado"), 0);
Promise.resolve().then(() => console.log("Promesa resuelta"));
console.log("Fin");

// Resultado esperado:
// Inicio
// Fin
// Promesa resuelta
// setTimeout ejecutado

// 8. Promise.all con diferentes tiempos
function promesa1() {
    return new Promise(resolve => setTimeout(() => resolve("Promesa 1"), 1000));
}

function promesa2() {
    return new Promise(resolve => setTimeout(() => resolve("Promesa 2"), 1500));
}

function promesa3() {
    return new Promise(resolve => setTimeout(() => resolve("Promesa 3"), 800));
}

Promise.all([promesa1(), promesa2(), promesa3()])
    .then(() => console.log("Todas las promesas resueltas"))
    .catch(error => console.error("Error:", error));

// 9. Función waitSeconds con Promise y async/await
function waitSeconds(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function esperarYMostrar() {
    console.log("Iniciando espera...");
    await waitSeconds(3);
    console.log("Tiempo finalizado");
}

esperarYMostrar();

// 10. Simulación de cajero automático
let saldoGlobal = 500;

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldoGlobal);
        }, 1000);
    });
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= saldoGlobal) {
                saldoGlobal -= amount;
                resolve(saldoGlobal);
            } else {
                reject("Fondos insuficientes");
            }
        }, 2000);
    });
}

async function realizarOperaciones() {
    try {
        const saldoInicial = await checkBalance();
        console.log(`Saldo disponible: ${saldoInicial}$`);

        console.log("Retirando 300$...");
        const saldoDespuesRetiro1 = await withdrawMoney(300);
        console.log(`Operación exitosa, saldo restante: ${saldoDespuesRetiro1}$`);

        console.log("Retirando 300$...");
        const saldoDespuesRetiro2 = await withdrawMoney(300);
        console.log(`Operación exitosa, saldo restante: ${saldoDespuesRetiro2}$`);
    } catch (error) {
        console.error("Error:", error);
    }
}

realizarOperaciones();