const readline = require('readline');

// Crear una interfaz de lectura para recibir la entrada del usuario desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFigura() {
    rl.question("Ingrese la figura que desea calcular (circulo, rectangulo, cuadrado): ", (figura) => {
        figura = figura.toLowerCase();

        if (figura === "circulo") {
            rl.question("Ingrese el radio del círculo: ", (radio) => {
                radio = parseFloat(radio);
                let area = Math.PI * Math.pow(radio, 2);
                let perimetro = 2 * Math.PI * radio;
                console.log(`El área del círculo es: ${area.toFixed(2)} y el perímetro es: ${perimetro.toFixed(2)}`);
                rl.close();
            });
        } else if (figura === "rectangulo") {
            rl.question("Ingrese la base del rectángulo: ", (base) => {
                rl.question("Ingrese la altura del rectángulo: ", (altura) => {
                    base = parseFloat(base);
                    altura = parseFloat(altura);
                    let area = base * altura;
                    let perimetro = 2 * (base + altura);
                    console.log(`El área del rectángulo es: ${area.toFixed(2)} y el perímetro es: ${perimetro.toFixed(2)}`);
                    rl.close();
                });
            });
        } else if (figura === "cuadrado") {
            rl.question("Ingrese el valor de un lado del cuadrado: ", (lado) => {
                lado = parseFloat(lado);
                let area = Math.pow(lado, 2);
                let perimetro = 4 * lado;
                console.log(`El área del cuadrado es: ${area.toFixed(2)} y el perímetro es: ${perimetro.toFixed(2)}`);
                rl.close();
            });
        } else {
            console.log("Figura no reconocida. Por favor, ingrese 'circulo', 'rectangulo' o 'cuadrado'.");
            rl.close();
        }
    });
}

calcularFigura();