// validador.js
// Funciones de validación

// Validar email
export const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Validar contraseña (mínimo 8 caracteres, una mayúscula, una minúscula y un número)
export const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
};

// Validar número de teléfono
export const validarTelefono = (telefono) => {
    const regex = /^\+?[\d\s-]{10,}$/;
    return regex.test(telefono);
};

// Clase Validador que usa todas las funciones
export class Validador {
    static validarFormulario(datos) {
        const errores = [];
        
        if (!validarEmail(datos.email)) {
            errores.push('Email inválido');
        }
        
        if (!validarPassword(datos.password)) {
            errores.push('Contraseña inválida');
        }
        
        if (!validarTelefono(datos.telefono)) {
            errores.push('Teléfono inválido');
        }
        
        return {
            esValido: errores.length === 0,
            errores
        };
    }
}
