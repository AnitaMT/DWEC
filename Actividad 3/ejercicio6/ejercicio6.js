let personas = [];

function agregarPersonas() {
    const input = document.getElementById("inputName");
    const lista = document.getElementById("nameList");

    let elemento = input.value;
    if (elemento != "") {
        let li = document.createElement("li");
        li.textContent = elemento;
        personas.push(elemento);
        lista.appendChild(li);
        input.value = "";
    }
}

function aleatorio() {
    let seleccion = Math.floor(Math.random() * personas.length);
    const lista = document.getElementById("nameList");
    const nombre = document.getElementsByTagName("li");

    for(let name of nombre){
        name.style.backgroundColor="white";
        /*Pongo el [0] al final porque de esa manera se almacena la parte que se ha extraído de la frase en la posición 0 del array y se muestra por pantalla.*/
        name.textContent = name.innerText.split(" - Se ha elegido: ")[0];
    }

    nombre[seleccion].style.backgroundColor = "yellow";
    nombre[seleccion].textContent += " - Se ha elegido: " + nombre[seleccion].innerText;
}