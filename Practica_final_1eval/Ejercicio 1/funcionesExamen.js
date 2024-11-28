function esCurioso(num){
    // Creo una variable para almacenar la suma de los cubos.
    let sumaCubos = 0;

    // Ahora creo una variable llamada dígitos que convierte el número pasado por
    // parámetro en una cadena para poder iterar sus dígitos.
    let digitos = num.toString();

    //A continuación, hago un bucle para recorrer los dígitos del número pasado por
    // parámetro y calcular el cubo de la suma de sus dígitos.
    for (let i = 0; i < digitos.length; i++){
        let digito = parseInt(digitos[i]); //Volvemos a convertir el dígito en un número entero para poder aplicarle Math.pow.
        sumaCubos = sumaCubos + Math.pow(digito,3); // calculamos el cubo del número de dígitos.
    }
    return sumaCubos == num; //devuelve true si ambas variables son iguales y false si no lo son.
}

function mostrarCuriosos(){
    // Creo las variables iniciales contador para sacar solo los 5 primeros números curiosos,
    // curiosos, que es una lista donde almacenaré los 5 números y por último la variable
    // num para almacenar los números en la lista.
    let contador = 0;
    let curiosos = [];
    let num = 1;

    // Realizo un bucle en el que mientras el contador sea menor a 5, siga buscando el
    // número curioso.
    while(contador < 5){
        //Si el número es curioso, se añade a la lista y se aumenta el contador.
        if(esCurioso(num)){
            curiosos.push(num);
            contador++;
        }
        num ++; //Incremento la variable num para que no se resetee cada vez que inicia el bucle.
    }
    alert(`Los 5 primeros números curiosos son: ${curiosos} `); //Muestro en un alert el contenido de la lista.
}

mostrarCuriosos();