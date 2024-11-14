const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para leer el vector asegurando que los números estén en orden ascendente
function leerVector(index, vector, callback) {
    if (index < 5) {
        rl.question(`Ingresa el número ${index + 1} (debe ser ascendente): `, (respuesta) => {
            let numero = parseInt(respuesta);

            // Validación de entrada
            if (isNaN(numero)) {
                console.log("Por favor ingresa un número válido.");
                leerVector(index, vector, callback);  // Volver a pedir el número
            } else if (index > 0 && numero < vector[index - 1]) {
                console.log("El número debe ser mayor o igual que el anterior.");
                leerVector(index, vector, callback);  // Volver a pedir el número
            } else {
                vector.push(numero);
                leerVector(index + 1, vector, callback);  // Leer siguiente número
            }
        });
    } else {
        callback(vector);
    }
}

// Función para combinar y ordenar dos vectores
function mezclarYOrdenar(v1, v2) {
    let mezcla = [...v1, ...v2];
    mezcla.sort((a, b) => a - b);  // Ordenar de forma ascendente
    return mezcla;
}

// Función principal
function main() {
    let vector1 = [];
    let vector2 = [];

    leerVector(0, vector1, (vector1Final) => {
        console.log("Vector 1:", vector1Final);

        leerVector(0, vector2, (vector2Final) => {
            console.log("Vector 2:", vector2Final);

            let resultado = mezclarYOrdenar(vector1Final, vector2Final);
            console.log("Vector combinado y ordenado:", resultado);

            rl.close();
        });
    });
}

// Ejecutar la función principal
main();