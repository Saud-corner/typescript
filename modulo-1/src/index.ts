import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const datosPrueba: number[] = [12.4, 8.9, 15.0, 100.5, 11.2]; // El 100.5 es un valor atípico para probar

console.log("--- RESULTADOS ESTADÍSTICOS ---");
console.log("Datos originales:", datosPrueba);
console.log("Media:", calcularMedia(datosPrueba));
console.log("Mediana:", calcularMediana(datosPrueba));

const datosLimpios = filtrarAtipicos(datosPrueba, 20);
console.log("Datos filtrados (límite 20):", datosLimpios);