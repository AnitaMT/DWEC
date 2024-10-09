// Calculadora de edad canina

function calculadoraEdadCanina(){
    let edadPerro = Number(prompt("Introduce la edad de tu perro: "));
    let edadHumano = edadPerro * 7;
    
    console.log("La edad de tu perro en humano es " + edadHumano + " años.");
}

calculadoraEdadCanina();
