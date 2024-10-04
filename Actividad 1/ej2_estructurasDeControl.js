/*Condicionales (if, else if, else):*/


/*2.1. Escribe un programa que verifique si un número es positivo, negativo o cero e imprima
el resultado.*/

let numero = 10;

if (numero > 0) {
    console.log("El número " + numero + " es un número positivo");
} else if (numero < 0) {
    console.log("El número " + numero + " es un número negativo");
} else {
    console.log("El número es cero.")
}


/*2.2. Crea un programa que determine si una persona es menor de edad, adulta o anciana
según su edad.*/

let personita = 27;

if (personita < 18) {
    console.log("Esta persona es menor de edad.");
} else if (personita > 18 && personita < 65) {
    console.log("Esta persona es adulta.");
} else {
    console.log("Esta persona es anciana.")
}

/*Bucles (for, while, do-while):*/


/*2.3. Utiliza un bucle for para imprimir los valores de i desde 0 hasta 4.*/

console.log("Números con bucle for");

for (i = 0; i < 5; i++) {
    console.log(i);
}


/*2.4. Utiliza un bucle while para imprimir los valores del contador desde 0 hasta 4.*/

let num = 0;

console.log("Números con bucle while");

while (num < 5) {
    console.log(num);
    num++;
}

/*2.5. Emplea un bucle do-while para imprimir los valores de x desde 0 hasta 4.*/

let x = 0;

console.log("Números con bucle do while");

do {
    console.log(x);
    x++;
} while (x < 5);


/*Interrupción de bucles (break, continue):*/


/*2.6. Crea un bucle for que se detenga cuando i sea igual a 3 usando la instrucción break.*/

console.log("Uso de break en un bucle");

for (i = 0; i < 5; i++) {

    if (i == 3) {
        break;
    } else {
        console.log(i);
    }
}


/*2.7. Implementa un bucle for que salte la iteración cuando j sea igual a 2 usando la
instrucción continue.*/

console.log("Uso de continue en un bucle");

for (j = 0; j < 5; j++) {

    if (j == 2) {
        continue;
    } else {
        console.log(j);
    }
}


/*Condicional (switch):*/


/*2.8. Convierte un número del 1 al 12 en el nombre del mes correspondiente. El programa
debe solicitar al usuario que ingrese un número del 1 al 12 y luego mostrar el nombre del
mes asociado.
Ejemplo:
• Ingresa un número del 1 al 12 para saber el mes correspondiente: 9
• El mes correspondiente al número 9 es: Septiembre*/

let mes = 8;

switch (mes) {
    case 1:
        console.log("El mes correspondiente al número 1 es: Enero");
        break;
    case 2:
        console.log("El mes correspondiente al número 2 es: Febrero");
        break;
    case 3:
        console.log("El mes correspondiente al número 3 es: Marzo");
        break;
    case 4:
        console.log("El mes correspondiente al número 4 es: Abril");
        break;
    case 5:
        console.log("El mes correspondiente al número 5 es: Mayo");
        break;
    case 6:
        console.log("El mes correspondiente al número 6 es: Junio");
        break;
    case 7:
        console.log("El mes correspondiente al número 7 es: Julio");
        break;
    case 8:
        console.log("El mes correspondiente al número 8 es: Agosto");
        break;
    case 9:
        console.log("El mes correspondiente al número 9 es: Septiembre");
        break;
    case 10:
        console.log("El mes correspondiente al número 10 es: Octubre");
        break;
    case 11:
        console.log("El mes correspondiente al número 11 es: Noviembre");
        break;
    case 12:
        console.log("El mes correspondiente al número 12 es: Diciembre");
        break;
    default:
        console.log("Por favor, ingresa un número válido entre 1 y 12.");
}
