// Calcular factorial.

function calculateFactorial(number) {
    let result = 1;

    for (i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

let numero = parseInt(prompt("Inserte un núero entero no negativo: "));

if (numero > 0) {
    let factorial = calculateFactorial(numero);
    console.log("El factorial de " + numero + " es: " + factorial);
} else {
    console.log("Por favor, ingresa un número entero no negativo.");
}