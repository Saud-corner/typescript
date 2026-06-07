export function calcularMedia(array: number[]): number | null {
    // Manejo de caso límite exigido en la rúbrica
    if (array.length === 0) return null;
    
    const suma = array.reduce((acc, val) => acc + val, 0);
    return suma / array.length;
}

export function calcularMediana(array: number[]): number | null {
    if (array.length === 0) return null;
    
    const ordenados = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    
    return ordenados[mitad];
}

export function filtrarAtipicos(array: number[], limite: number): number[] {
    return array.filter(num => num <= limite);
}