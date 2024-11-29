// Función que establece el nivel de rotación máximo en función del idioma.
function rotacion(){
    // Accedo a los elementos con los que voy a trabajar en esta función.
    const alfabeto = document.getElementById("alfabeto");
    const nivelRotado = document.getElementById("nivelRotado");

    // Si el valor del elemento alfabeto es castellano, se establece un máximo de 27.
    if(alfabeto.value == "castellano"){
        nivelRotado.value = 0; // Cuando se cambie de idioma, el nivel de rotación vuelve a 0.
        nivelRotado.setAttribute("max", 27);
    }

    // Si el valor del elemento alfabeto es inglés, se establece un máximo de 26.
    if(alfabeto.value == "ingles"){
        nivelRotado.value = 0;
        nivelRotado.setAttribute("max", 26);
    }
}

function descifrar(){
    //Accedo a los elementos con los que voy a trabajar posteriormente
    const alfabeto = document.getElementById("alfabeto").value; //Accedo al valor del elemento alfabeto, es decir 'castellano' o 'inglés'
    const texto = document.getElementById("texto").value.toUpperCase(); // Convertir a mayúsculas
    const nivelRotado = parseInt(document.getElementById("nivelRotado").value) || 0; // Accedo al valor del nivel de rotado, que depende del idioma, y si no se ha insertado ningún nivel, por defecto se le da el valor 0.

    //Creo los alfabetos tanto en español como en inglés para poder trabajar con ellos a la hora de descifrar los mensajes.
    let alfabetoEsp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let alfabetoEng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Variable para guardar el resultado descifrado.
    let descifrado = "";

    // Comienza bloque de descifrado del texto si el idioma seleccionado fue castellano.
    if(alfabeto == 'castellano'){
        // Recorremos el texto que se ha insertado en el textarea
        for (let i = 0; i < texto.length; i++) {
            //Variable que va a almacenar cada letra del texto.
            const letra = texto[i];
    
            // Verificar si la letra pertenece al alfabeto
            if (alfabetoEsp.includes(letra)) {
                const indice = alfabetoEsp.indexOf(letra); // Encontrar la posición de la letra en el alfabeto castellano.
                let nuevaPosicion = indice - nivelRotado; // Restamos el nivel de rotación.
    
                if (nuevaPosicion < 0) { // Ajustamos la posición si es negativo sumándole la longitud del alfabeto.
                     // Por ejemplo, si nuevaPosicion = -1 y la longitud del alfabeto español (alfabetoEsp.length) es 27,
                    // entonces nuevaPosicion = -1 + 27 = 26, que corresponde a la última letra del alfabeto.
                    nuevaPosicion += alfabetoEsp.length;
                }
    
                descifrado += alfabetoEsp[nuevaPosicion]; // Añadimos la letra descifrada.
            } else {
                descifrado += letra; // Si no pertenece al alfabeto, se deja igual.
            }
        }
    }

    // Comienza bloque de descifrado del texto si el idioma seleccionado fue inglés.
    if(alfabeto == 'ingles'){
        // Recorremos el texto que se ha insertado en el textarea
        for (let i = 0; i < texto.length; i++) {
            //Variable que va a almacenar cada letra del texto.
            const letra = texto[i];
    
            // Verificar si la letra pertenece al alfabeto
            if (alfabetoEng.includes(letra)) {
                const indice = alfabetoEng.indexOf(letra); // Encontrar la posición de la letra en el alfabeto inglés.
                let nuevaPosicion = indice - nivelRotado; // Restamos el nivel de rotación.
    
                if (nuevaPosicion < 0) { // Ajustamos la posición si es negativo sumándole la longitud del alfabeto.
                    nuevaPosicion += alfabetoEng.length;
                }
    
                descifrado += alfabetoEng[nuevaPosicion]; // Añadimos la letra descifrada.
            } else {
                descifrado += letra; // Si no pertenece al alfabeto, se deja igual.
            }
        }
    }

    //Mostrar el resultado en el elemento p (párrafo) con id="resultado".
    const resultado = document.getElementById("resultado");
    resultado.textContent = descifrado;
}

//Función para que al recargar la página se vacíen los campos que permanecen rellenos por defecto
window.onload = function () {
    document.getElementById('alfabeto').value = 'castellano'; // Se reestablece el castellano como valor predeterminado.
    document.getElementById('texto').value = ''; // Limpiar textarea
    document.getElementById('nivelRotado').value = 0; // Reestablecer el nivel de rotado a 0.
};