/* 1. Ejercicio 1 JS: Tipos de datos */

/*Tipos de datos primitivos:*/

/*1.1. Declara una variable de tipo string y asígnale un mensaje de saludo. Luego, imprime
la variable en la consola.*/

let saludo = "Hola holita";

console.log(saludo);

/*1.2. Declara una variable de tipo number y asígnale tu edad. Luego, imprime la variable en
la consola.*/

let miEdad = 27;

console.log(miEdad);

/*1.3. Declara una variable de tipo boolean y asígnale true o false según tu preferencia.
Luego, imprime la variable en la consola.*/

let tortillaConCebolla = true;

console.log(tortillaConCebolla);

/*1.4. Declara una variable de tipo null y otra de tipo undefined. Luego, imprime ambas
variables en la consola.*/

let nulo = null;

let indefinido = undefined;

console.log(nulo + "\n" + indefinido);


/*Tipos de datos no primitivos (objetos):*/


/*1.5. Crea un objeto que represente un artículo con propiedades
como name, price y category. Imprime el objeto en la consola.*/

let articulo = {
    name: "Peluche",
    price: 6,
    category: "Hello Kitty"
}

console.log(articulo);

/*1.6. Declara un array que contenga nombres de ciudades. Imprime el array en la consola.
Variables:*/

let ciudades = ["Jerez", "Málaga", "Granada", "Cádiz"];

console.log(ciudades);

/*1.7. Declara una variable y asígnale tu color favorito. Luego, modifica la variable con otro
color e imprime ambos valores en la consola.*/

let miColor = "morado";

console.log(miColor);

miColor = "lila";

console.log(miColor);


/*Declaración de variables:*/

/*1.8. Declara dos variables, una sin asignarle ningún valor y otra con el valor null. Imprime
ambas variables en la consola.*/

let sinValor;
let nula = null;

console.log(sinValor, nula);


/*Alcance de las variables:*/


/*1.9. Crea dos variables, una dentro de una función y otra fuera de ella. Intenta acceder a
ambas variables desde dentro y fuera de la función, y observa los resultados en la
consola.*/

let cena = "pucherito";

function comer() {
    let almuerzo = "aneto";
    console.log("Almuerzo: " + almuerzo + ", Cena: " + cena);
}

comer();

/*console.log("Almuerzo: " + almuerzo + ", Cena: " + cena);

Esto genera un error porque no se puede acceder a la variable almuerzo porque está dentro de la función.*/



/*Reglas de nomenclatura de variables:*/


/* 1.10. Declara variables con nombres que sigan las reglas de JavaScript y otras que no las
sigan. Imprime los nombres de las variables en la consola.*/

//Variables que siguen las reglas:

let miVariable = "Sigue las reglas";
let _otraVariable = "También sigue las reglas";
let $precio = 100;
let variable123 = "Números permitidos después de letras";

// Variables que no siguen las reglas de JavaScript
//let 123variable = "No puede comenzar con un número";
//let my-variable = "No puede contener guiones medios"; 
//let var = "No puede ser una palabra reservada"; // 'var' es una palabra reservada

console.log("Variables válidas:");
console.log("miVariable:", miVariable);
console.log("_otraVariable:", _otraVariable);
console.log("$precio:", $precio);
console.log("variable123:", variable123);

/*Operadores:*/


/*1.11. Utiliza diferentes operadores (+, -, *, /, %, ++, --) con variables que contengan
números. Imprime los resultados en la consola.*/

let num = 5;
let numero = 10;
let numerito = 2;

console.log(num + numero);
console.log(numero - numerito);
console.log(num * numero);
console.log(num / numerito);
console.log(numero % numerito);
console.log(++numero);
console.log(--num);



/*Strings:*/


/*1.12. Declara una variable con una cadena de texto de varias líneas usando caracteres de
escape (\n, \t). Imprime la cadena resultante en la consola.*/

let cancion = "\tNadie pasa de esta esquina, \n\taquí mandan las divinas, \n\tporque somos gasolina, \n\tgasolina de verdad.";

console.log(cancion);