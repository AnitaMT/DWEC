function addTask() {
    const input = document.getElementById("newTaskInput");
    const boton = document.getElementById("addTaskBtn");
    const lista = document.getElementById("taskList");

    let elemento = input.value;
    if (elemento != "") {
        let li = document.createElement("li");
        li.textContent = elemento;

        let boton = document.createElement("button");
        boton.classList.add("deleteBtn");
        boton.textContent = "X";
        boton.onclick = function () {
            li.remove();
        }

        li.appendChild(boton);
        lista.appendChild(li);
        input.value = "";
    }
}