document.addEventListener("DOMContentLoaded", function(){
    const nombreInput = document.getElementById("nombre");
    const passwordInput = document.getElementById("password");
    const poblacionInput = document.getElementById("poblacion");
    const formulario = document.getElementById("formulario");
    
    const nombreError = document.getElementById("nombre-error");
    const passwordError = document.getElementById("password-error");
    const poblacionError = document.getElementById("poblacion-error");
    
    function validarFormulario() {
        let esValido = true;

        if (nombreInput.value.trim() === "" || nombreInput.value.length < 8) {
            nombreError.textContent = "El nombre debe tener al menos 8 caracteres y no debe estar vacío.";
            nombreInput.classList.add("input-error");
            esValido = false;
        } else {
            nombreError.textContent = "";
            nombreInput.classList.remove("input-error");
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = "La contraseña debe tener entre 6 y 10 caracteres alfanuméricos, y al menos una letra mayúscula y un dígito.";
            passwordInput.classList.add("input-error");
            esValido = false;
        } else {
            passwordError.textContent = "";
            passwordInput.classList.remove("input-error");
        }

        if (poblacionInput.value === "") {
            poblacionError.textContent = "Debes seleccionar una población.";
            poblacionInput.classList.add("input-error");
            esValido = false;
        } else {
            poblacionError.textContent = "";
            poblacionInput.classList.remove("input-error");
        }

        return esValido;
    }

    formulario.addEventListener("submit", function(e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });
});