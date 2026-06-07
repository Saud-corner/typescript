"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerRecurso = obtenerRecurso;
function obtenerRecurso(endpoint, datosSimulados) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!endpoint) {
                reject({ codigoEstado: 400, exito: false, errores: ["Endpoint no válido"] });
                return;
            }
            resolve({ codigoEstado: 200, exito: true, datos: datosSimulados });
        }, 1500);
    });
}
