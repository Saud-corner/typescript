import { Estudiante, generarReporte, EstadoMatricula } from './domain/types/index.js';
import { obtenerRecurso } from './services/api-client.js';

console.log("--- PRUEBA 1: UNIONES DISCRIMINADAS ---");
const miMatricula: EstadoMatricula = {
    tipo: "ACTIVA",
    asignaturas: [{ id: "A1", nombre: "Programación MULTIPLATAFORMA", creditos: 6 }]
};
console.log(generarReporte(miMatricula));

console.log("\n--- PRUEBA 2: SERVICIO GENÉRICO ---");
const estudianteMock: Estudiante = {
    id: "EST-999",
    nombreCompleto: "Saud",
    email: "saud@ceac.es"
};

console.log("Conectando con la base de datos simulada... (espera 1.5s)");

obtenerRecurso<Estudiante>("/api/estudiantes/EST-999", estudianteMock)
    .then(respuesta => {
        console.log("✅ ÉXITO. Datos recibidos del servidor:");
        console.log(`- Nombre: ${respuesta.datos.nombreCompleto}`);
        console.log(`- Email: ${respuesta.datos.email}`);
    })
    .catch(error => console.error("❌ ERROR:", error));