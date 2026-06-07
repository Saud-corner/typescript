"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_js_1 = require("./math-utils.js");
const datosPrueba = [12.4, 8.9, 15.0, 100.5, 11.2]; // El 100.5 es un valor atípico para probar
console.log("--- RESULTADOS ESTADÍSTICOS ---");
console.log("Datos originales:", datosPrueba);
console.log("Media:", (0, math_utils_js_1.calcularMedia)(datosPrueba));
console.log("Mediana:", (0, math_utils_js_1.calcularMediana)(datosPrueba));
const datosLimpios = (0, math_utils_js_1.filtrarAtipicos)(datosPrueba, 20);
console.log("Datos filtrados (límite 20):", datosLimpios);
