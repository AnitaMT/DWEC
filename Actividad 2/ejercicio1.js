// Calculadora de gastos de viaje.

// Función para calcular el coste del viaje

function calcularCosteTotal() {
    let alojamiento = parseFloat(prompt("Introduce los gastos del alojamiento: "));
    let alimentacion = parseFloat(prompt("Introduce los gastos de la alimentación: "));
    let entretenimiento = parseFloat(prompt("Introduce los gastos del entretenimiento: "));

    let costeTotal = alojamiento + alimentacion + entretenimiento;

    console.log("El coste total del viaje es de " + costeTotal.toFixed(2) + "€.");
}

calcularCosteTotal();