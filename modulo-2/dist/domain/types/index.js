"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarReporte = generarReporte;
// 4. Función de evaluación con switch
function generarReporte(estado) {
    switch (estado.tipo) {
        case "ACTIVA":
            return `ESTADO: Activa. El alumno está cursando ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `ESTADO: Suspendida. Motivo del bloqueo: ${estado.motivo}`;
        case "FINALIZADA":
            return `ESTADO: Finalizada. Calificación media definitiva: ${estado.notaMedia}`;
    }
}
