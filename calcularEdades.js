const readline = require('readline');

// Crear una interfaz de lectura para recibir la entrada del usuario desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para almacenar las edades
let edades = [];

// Función para ingresar las edades y validar
function ingresarEdad(i) {
    if (i < 10) {
        rl.question(`Ingrese la edad de la persona ${i + 1} (entre 1 y 120): `, (edad) => {
            edad = parseInt(edad);
            
            // Validar que la edad esté entre 1 y 120
            if (edad >= 1 && edad <= 120) {
                edades.push(edad);
                ingresarEdad(i + 1);  // Llamar recursivamente para la siguiente persona
            } else {
                console.log("Error: La edad debe estar entre 1 y 120. Inténtalo nuevamente.");
                ingresarEdad(i);  // Volver a pedir la edad si es inválida
            }
        });
    } else {
        // Cuando hemos ingresado las 10 edades, realizar los cálculos
        calcularEstadisticas();
        rl.close();
    }
}

// Función para calcular las estadísticas
function calcularEstadisticas() {
    let menoresDeEdad = 0;
    let mayoresDeEdad = 0;
    let adultosMayores = 0;
    let edadMasBaja = Math.min(...edades);
    let edadMasAlta = Math.max(...edades);
    let sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    let promedioEdades = sumaEdades / edades.length;

    // Contar la cantidad de menores de edad, mayores de edad y adultos mayores
    edades.forEach(edad => {
        if (edad < 18) {
            menoresDeEdad++;
        } else if (edad >= 18 && edad < 60) {
            mayoresDeEdad++;
        } else if (edad >= 60) {
            adultosMayores++;
        }
    });

    // Mostrar los resultados
    console.log(`\nEstadísticas del grupo de personas:`);
    console.log(`Cantidad de menores de edad: ${menoresDeEdad}`);
    console.log(`Cantidad de mayores de edad: ${mayoresDeEdad}`);
    console.log(`Cantidad de adultos mayores: ${adultosMayores}`);
    console.log(`Edad más baja: ${edadMasBaja}`);
    console.log(`Edad más alta: ${edadMasAlta}`);
    console.log(`Promedio de edades: ${promedioEdades.toFixed(2)}`);
}

// Comenzar el proceso pidiendo la primera edad
ingresarEdad(0);