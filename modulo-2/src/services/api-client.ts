export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
}

export function obtenerRecurso<T>(endpoint: string, datosSimulados: T): Promise<RespuestaAPI<T>> {
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