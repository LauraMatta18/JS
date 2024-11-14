const readlineSync = require('readline-sync');

// Vector para almacenar las personas
let personas = [];

function agregarPersona() {
    let nombre = readlineSync.question("Ingrese el nombre: ");
    let cedula = readlineSync.question("Ingrese el número de cédula: ");
    let fechaNacimiento = readlineSync.question("Ingrese la fecha de nacimiento (dd/mm/aaaa): ");
    let correo = readlineSync.question("Ingrese el correo electrónico: ");
    let ciudadResidencia = readlineSync.question("Ingrese la ciudad de residencia: ");
    let ciudadOrigen = readlineSync.question("Ingrese la ciudad de origen: ");

    let canciones = [];
    for (let i = 1; i <= 3; i++) {
        let artista = readlineSync.question(`Ingrese el nombre del artista de la canción ${i}: `);
        let titulo = readlineSync.question(`Ingrese el título de la canción ${i}: `);
        canciones.push({ artista: artista, titulo: titulo });
    }

    // Crear un objeto persona con los datos ingresados
    let persona = {
        nombre: nombre,
        cedula: cedula,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        ciudadResidencia: ciudadResidencia,
        ciudadOrigen: ciudadOrigen,
        cancionesFavoritas: canciones
    };

    // Agregar la persona al vector
    personas.push(persona);
    console.log("Persona agregada exitosamente.");
}

function mostrarPersona() {
    let posicion = readlineSync.question("Ingrese la posición de la persona en el vector (0-5): ");
    posicion = parseInt(posicion);

    if (posicion >= 0 && posicion < personas.length) {
        let persona = personas[posicion];
        console.log("Información de la persona:");
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Cédula: ${persona.cedula}`);
        console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        console.log(`Correo: ${persona.correo}`);
        console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
        console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
        console.log("Canciones favoritas:");
        persona.cancionesFavoritas.forEach((cancion, index) => {
            console.log(`${index + 1}. Artista: ${cancion.artista} - Título: ${cancion.titulo}`);
        });
    } else {
        console.log("Posición inválida.");
    }
}

function mostrarMenu() {
    let opcion;
    do {
        console.log("\nMenú:");
        console.log("1. Agregar una persona");
        console.log("2. Mostrar la información de una persona");
        console.log("3. Salir");

        opcion = readlineSync.question("Elija una opción (1, 2, 3): ");

        switch (opcion) {
            case "1":
                agregarPersona();
                break;
            case "2":
                mostrarPersona();
                break;
            case "3":
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "3");
}

// Llamar a la función del menú
mostrarMenu();