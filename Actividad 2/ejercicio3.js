// Calculadora IMC

function calcularIMC() {

    let peso = parseFloat(prompt("Introduce tu peso: "));
    let altura = parseFloat (prompt("Introduce tu altura en metros: "));

    let imc = peso / (altura ** 2);

    if(imc < 18.5) {
        console.log("Bajo peso.");
    } else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal.");
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso.");
    } else {
        console.log("Obesidad.");
    }
}

calcularIMC();