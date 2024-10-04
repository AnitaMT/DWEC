/*4. Ejercicio 4 JS: Arrays*/

/*4.1. Crea un programa que solicite al usuario ingresar una lista de números y luego
encuentre el número más grande en esa lista.
• Solicita al usuario que ingrese la cantidad de números que quiere introducir.
• Solicita al usuario que introduzca cada número uno por uno.
• Almacena estos números en un array.
• Escribe una función llamada findLargestNumber que tome un array de números
como entrada y devuelva el número más grande en el array.
• Dentro de la función, itera a través del array usando un bucle for para encontrar el
número más grande.
• Muestra el número más grande encontrado al usuario.
Asegúrate de que el programa utilice arrays para almacenar los números y la función para
encontrar el número más grande.
Ejemplo:
• Ingresa la cantidad de números: 5
• Ingresa el número 1: 10
• Ingresa el número 2: 25
• Ingresa el número 3: 7
• Ingresa el número 4: 18
• Ingresa el número 5: 12
• El número más grande es: 25*/

function findLargestNumber() {
    let maxNum = numeros[0];

    for (i = 1; i < numeros.length; i++) {
        if (numeros[i] > maxNum) {
            maxNum = numeros[i];
        }
    }

    return maxNum;
}

let cantidadNumeros = prompt("Ingresa la cantidad de números: ");

cantidadNumeros = Number(cantidadNumeros);

let numeros = [];

for (i = 0; i < cantidadNumeros; i++) {
    let numero = Number(prompt(`Ingresa el número ${i + 1}: `));
    numeros.push(numero);
}


let numeroMayor = findLargestNumber(numeros);

console.log("El número más grande es: " + numeroMayor);


