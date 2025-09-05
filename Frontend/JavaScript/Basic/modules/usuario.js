// usuario.js
// Clase Usuario y funciones relacionadas

export class Usuario {
    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    obtenerInfo() {
        return `${this.nombre} (${this.email}) - ${this.edad} años`;
    }
}

export const roles = {
    ADMIN: 'admin',
    USUARIO: 'usuario',
    INVITADO: 'invitado'
};

export function crearUsuario(datos) {
    return new Usuario(datos.nombre, datos.email, datos.edad);
}
