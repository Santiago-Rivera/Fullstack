// 1. Código con error lógico para debugging
function calcularPromedio(notas) {
    let suma = 0;
    // Error lógico: el bucle comienza en 1 en lugar de 0
    for (let i = 1; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Array de prueba
const calificaciones = [85, 90, 78, 92, 88];
console.log('Promedio calculado (con error):', calcularPromedio(calificaciones));
// El resultado será incorrecto porque se salta la primera nota

// Versión corregida para comparar
function calcularPromedioCorregido(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

console.log('Promedio correcto:', calcularPromedioCorregido(calificaciones));

// 2. Código para practicar con breakpoints
function procesarCompra(carrito) {
    // Coloca un breakpoint en esta línea para comenzar el debugging
    let total = 0;
    let descuento = 0;
    
    // Calcular total
    for (let item of carrito) {
        total += item.precio * item.cantidad;
    }
    
    // Aplicar descuentos
    if (total > 1000) {
        // Breakpoint aquí para verificar el descuento
        descuento = total * 0.1;
    } else if (total > 500) {
        descuento = total * 0.05;
    }
    
    // Calcular total final
    const totalConDescuento = total - descuento;
    
    // Breakpoint aquí para verificar el resultado final
    return {
        subtotal: total,
        descuento: descuento,
        total: totalConDescuento
    };
}

// Datos de prueba
const carrito = [
    { producto: 'Laptop', precio: 800, cantidad: 1 },
    { producto: 'Mouse', precio: 20, cantidad: 2 },
    { producto: 'Teclado', precio: 50, cantidad: 1 }
];

// Ejecutar la función
console.log('Resultado de la compra:', procesarCompra(carrito));

// 3. Función con múltiples puntos de interés para debugging
function procesarDatos(datos) {
    // Breakpoint 1: Inicio del procesamiento
    const resultados = [];
    let errores = 0;

    for (let i = 0; i < datos.length; i++) {
        try {
            // Breakpoint 2: Antes de procesar cada elemento
            const dato = datos[i];
            
            if (typeof dato !== 'number') {
                throw new Error('Dato no numérico');
            }
            
            // Breakpoint 3: Procesar dato válido
            const procesado = Math.pow(dato, 2) + 1;
            resultados.push(procesado);
            
        } catch (error) {
            // Breakpoint 4: Manejo de errores
            console.error(`Error procesando dato ${i}:`, error.message);
            errores++;
        }
    }

    // Breakpoint 5: Resultado final
    return {
        resultados,
        errores,
        exitosos: datos.length - errores
    };
}

// Datos de prueba con valores problemáticos
const datosPrueba = [1, 'dos', 3, null, 5, undefined, 7];
console.log('Resultado del procesamiento:', procesarDatos(datosPrueba));

/* 
Instrucciones para debugging:

1. Para el primer ejercicio:
   - Coloca un breakpoint en la línea del bucle for
   - Observa cómo i comienza en 1 en lugar de 0
   - Examina los valores de suma en cada iteración
   - Compara con la versión corregida

2. Para el segundo ejercicio:
   - Coloca breakpoints en los puntos sugeridos
   - Observa cómo cambian las variables total y descuento
   - Usa el panel de variables para monitorear los cambios
   - Utiliza F10 para avanzar paso a paso

3. Para el tercer ejercicio:
   - Coloca breakpoints en los puntos numerados
   - Observa el manejo de diferentes tipos de datos
   - Examina el contenido de resultados y errores
   - Usa F11 para entrar en las funciones
   
Herramientas de VS Code a utilizar:
- Panel de variables (Variables)
- Consola de depuración (Debug Console)
- Puntos de interrupción (Breakpoints)
- Control de ejecución (Step Over, Step Into, Step Out)
- Watch (para observar expresiones específicas)
*/