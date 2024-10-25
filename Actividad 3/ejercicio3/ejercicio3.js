function addItem() {
    let input = document.getElementById("newItemInput");
    let botonAgregar = document.getElementById("addItemBtn");
    let lista = document.getElementById("itemsList");

    let elemento = input.value;
    if (elemento != "") {
        let li = document.createElement("li");
        li.textContent = elemento;

        let botonBorrar = document.createElement("button");
        botonBorrar.innerHTML = '<i class="material-icons">delete</i>'
        botonBorrar.classList.add("deleteBtn");

        let botonCompletar = document.createElement("button");
        botonCompletar.innerHTML = '<i class="material-icons">check</i>'
        botonCompletar.classList.add("completeBtn");

        botonBorrar.onclick = function () {
            li.remove();
        }

        botonCompletar.onclick = function () {

            if (li.classList.contains("completed")) {
                li.style.textDecoration = "none";
                li.style.color = "black";
                li.classList.remove("completed");
            } else {
                li.style.textDecoration = "line-through";
                li.style.color = "#999";
                li.classList.add("completed");
            }
        }

        li.appendChild(botonCompletar);
        li.appendChild(botonBorrar);
        lista.appendChild(li);
        input.value = "";
    }
}