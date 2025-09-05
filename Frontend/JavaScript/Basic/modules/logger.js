// logger.js
// Sistema de logging

export class Logger {
    static log(mensaje, nivel = 'INFO') {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${nivel}: ${mensaje}`);
    }
}

export const niveles = {
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
    DEBUG: 'DEBUG'
};
