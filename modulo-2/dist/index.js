"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./domain/types/index.js");
const api_client_js_1 = require("./services/api-client.js");
console.log("--- PRUEBA 1: UNIONES DISCRIMINADAS ---");
const miMatricula = {
    tipo: "ACTIVA",
    asignaturas: [{ id: "A1", nombre: "Programación MULTIPLATAFORMA", creditos: 6 }]
};
console.log((0, index_js_1.generarReporte)(miMatricula));
console.log("\n--- PRUEBA 2: SERVICIO GENÉRICO ---");
const estudianteMock = {
    id: "EST-999",
    nombreCompleto: "Saud",
    email: "saud@ceac.es"
};
console.log("Conectando con la base de datos simulada... (espera 1.5s)");
(0, api_client_js_1.obtenerRecurso)("/api/estudiantes/EST-999", estudianteMock)
    .then(respuesta => {
    console.log("✅ ÉXITO. Datos recibidos del servidor:");
    console.log(`- Nombre: ${respuesta.datos.nombreCompleto}`);
    console.log(`- Email: ${respuesta.datos.email}`);
})
    .catch(error => console.error("❌ ERROR:", error));
