/*3. Ejercicio 3 JS: Funciones*/


/*3.1. Escribe un programa que solicite al usuario el radio de un círculo y luego calcule y
muestre el área y el perímetro del círculo.
• Solicita al usuario que ingrese el radio del círculo.
• Define dos funciones: una para calcular el área del círculo y otra para calcular el
perímetro del círculo.
• Usa las fórmulas matemáticas apropiadas dentro de estas funciones para
calcular el área (π * radio^2) y el perímetro (2 * π * radio) del círculo.
• Llama a estas funciones con el radio proporcionado por el usuario como
argumento.
• Muestra los resultados del área y el perímetro al usuario.*/


function calcularArea() {
    return Math.PI * Math.pow(radio, 2);
}

function calcularPerimetro() {
    return 2 * Math.PI * radio;
}

let radio = prompt("Introduce el radio del círculo: ");

radio = Number(radio);

let area = calcularArea(radio);
let perimetro = calcularPerimetro(radio)
    ;
console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);


/*3.2. Escribe una función llamada calculatePower que tome dos
parámetros: base y exponent. Esta función debe calcular y devolver el resultado de elevar
la base al exponente.
Ejemplo:
// Llamada a la función
let result = calculatePower(2, 3);
console.log(result); // Resultado esperado: 8*/

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

let result = calculatePower(2, 3);

console.log(result);