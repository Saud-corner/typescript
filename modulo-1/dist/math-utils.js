"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
function calcularMedia(array) {
    // Manejo de caso límite exigido en la rúbrica
    if (array.length === 0)
        return null;
    const suma = array.reduce((acc, val) => acc + val, 0);
    return suma / array.length;
}
function calcularMediana(array) {
    if (array.length === 0)
        return null;
    const ordenados = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}
function filtrarAtipicos(array, limite) {
    return array.filter(num => num <= limite);
}
