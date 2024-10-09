// Calculadora de descuentos.

let precioOriginal = parseFloat(prompt("Introduce el precio original: "));
let descuento = parseFloat(prompt("Introduce el descuento a aplicar: "));

function calcularDescuento() {
    let precioFinal = precioOriginal * ((100 - descuento)/100);

    return precioFinal.toFixed(2);
}

console.log("El precio final del producto después de aplicar un descuento del " + descuento + " es: " + calcularDescuento() + "€.");
