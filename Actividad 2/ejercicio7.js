// Conversor de temperatura

let opcion = (prompt("Elige el tipo de conversión. 1 - Celsius a Fahrenheit. 2 - Fahrenheit a Celsius."));

if(opcion == 1){
    let celsius = prompt("Ingresa la temperatura que desea convertir: ");
    let convertido = celsiusAFahrenheit(celsius);
    console.log(`${celsius} grados Celsius equivalen a ${convertido} grados Fahrenheit.`);
} else {
    let fahrenheit = prompt("Ingresa la temperatura que desea convertir: ");
    let convertido1 = fahrenheitACelsius(fahrenheit);
    console.log(`${fahrenheit} grados Fahrenheit equivalen a ${convertido1} grados Celsius.`);
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}