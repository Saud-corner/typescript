// 1. Entidades del sistema (con IDs inmutables usando readonly)
export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}

export interface Estudiante {
    readonly id: string;
    nombreCompleto: string;
    email: string;
}

// 2. Interfaces exactas para la Unión Discriminada
export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

// 3. La Unión Discriminada Estricta
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

// 4. Función de evaluación con switch y Análisis Exhaustivo
export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `ESTADO: Activa. El alumno está cursando ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `ESTADO: Suspendida. Motivo del bloqueo: ${estado.motivo}`;
        case "FINALIZADA":
            return `ESTADO: Finalizada. Calificación media definitiva: ${estado.notaMedia}`;
        default:
            // Análisis exhaustivo: Si en el futuro añadimos un nuevo estado a la Unión
            // y olvidamos ponerle su 'case', TypeScript lanzará un error aquí.
            const comprobacionExhaustiva: never = estado;
            return `Estado no manejado: ${comprobacionExhaustiva}`;
    }
}