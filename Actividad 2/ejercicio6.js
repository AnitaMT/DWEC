// Generador de secuencia de Fibonacci.

function generarFibonacci(n) {
    let fib = [0, 1]; 

    if (n === 1) {
        return [0];
    }

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

let numTerminos = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));

if (numTerminos > 0) {
    let resultado = generarFibonacci(numTerminos);
    console.log("Los primeros " + numTerminos + " términos de la secuencia Fibonacci son: " + resultado.join(", "));
} else {
    console.log("Por favor, ingresa un número mayor que 0.");
}

