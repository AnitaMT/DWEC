document.addEventListener("DOMContentLoaded", function(){
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordRepInput = document.getElementById("passwordrep");
    const matesInput = document.getElementById("mates");
    const condicionesCheckbox = document.getElementById("condiciones");
    const crearCuentaBoton = document.getElementById("crearCuenta");

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const resultadoCorrecto = num1 + num2;

    document.querySelector("label[for='mates']").innerText = `Resuelve esta operación: ${num1} + ${num2} =`;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validarFormulario() {
        if (nombreInput.value.trim() === "") {
            alert("El nombre no puede estar vacío.");
            nombreInput.focus();
            return false;
        }

        if (!emailPattern.test(emailInput.value)) {
            alert("El correo no es válido.");
            emailInput.focus();
            return false;
        }

        if (passwordInput.value.length < 8 || !/\d/.test(passwordInput.value)) {
            alert("La contraseña debe tener al menos 8 caracteres y contener un dígito.");
            passwordInput.focus();
            return false;
        }

        if (passwordRepInput.value !== passwordInput.value) {
            alert("Las contraseñas no coinciden.");
            passwordRepInput.focus();
            return false;
        }

        const respuestaMates = parseInt(matesInput.value);
        
        if (isNaN(respuestaMates) || respuestaMates !== resultadoCorrecto) {
            alert("Respuesta incorrecta a la operación matemática.");
            matesInput.focus();
            return false;
        }

        if (!condicionesCheckbox.checked) {
            alert("Debes aceptar las condiciones.");
            condicionesCheckbox.focus();
            return false;
        }

        return true;
    }

    condicionesCheckbox.addEventListener("change", function () {
        crearCuentaBoton.disabled = !condicionesCheckbox.checked;
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });


    document.querySelector("form").reset();
});
