document.addEventListener("DOMContentLoaded", function(){
    //Accedo a todos los elementos del formulario para poder trabajar con ellos posteriormente.
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordRepInput = document.getElementById("passwordrep");
    const matesInput = document.getElementById("mates");
    const condicionesCheckbox = document.getElementById("condiciones");
    const crearCuentaBoton = document.getElementById("crearCuenta");

    // Creo dos número aleatorios para la operación que pide el ejercicio.
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const resultadoCorrecto = num1 + num2;

    // Creo el texto 'Resuelve esta operación número + número' para que se muestre en el navegador.
    document.querySelector("label[for='mates']").innerText = `Resuelve esta operación: ${num1} + ${num2} =`;

    //Creo el patrón para validar los correos electrónicos.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Función para validar el formulario.
    function validarFormulario() {

        //Si el nombre está vacío, muestra mensaje de alerta.
        if (nombreInput.value.trim() === "") {
            alert("El nombre no puede estar vacío.");
            nombreInput.focus(); // El input toma el foco.
            return false; // no se envían los datos.
        }

        //Si el email que ha introducido el usuario no coincide con el patrón, muestra mensaje de alerta.
        if (!emailPattern.test(emailInput.value)) {
            alert("El correo no es válido.");
            emailInput.focus(); // toma el foco.
            return false; // no envía los datos.
        }

        //Si la contraseña tiene menos de 8 caracteres o no incliye al menos un dígito, muestra mensaje de alerta.
        if (passwordInput.value.length < 8 || !/\d/.test(passwordInput.value)) {
            alert("La contraseña debe tener al menos 8 caracteres y contener un dígito.");
            passwordInput.focus();
            return false;
        }

        //Si la repetición de la contraseña no coincide con la primera contraseña, muestra mensaje de alerta.
        if (passwordRepInput.value !== passwordInput.value) {
            alert("Las contraseñas no coinciden.");
            passwordRepInput.focus();
            return false;
        }

        // Creo variable para la solución a la operación matemática.
        const respuestaMates = parseInt(matesInput.value);
        
        //Si el usuario deja el campo en blanco o el input no es correcto (el resultado esperado), muestra mensaje de alerta.
        if (isNaN(respuestaMates) || respuestaMates !== resultadoCorrecto) {
            alert("Respuesta incorrecta a la operación matemática.");
            matesInput.focus();
            return false;
        }

        //Si no se aceptan las condiciones el checkbox, muestra mensaje de alerta.
        if (!condicionesCheckbox.checked) {
            alert("Debes aceptar las condiciones.");
            condicionesCheckbox.focus();
            return false;
        }

        return true; //Si todo está bien, se envía formulario.
    }

    //Se añade evento para que cuando se marque el checkbox, aparezca la opción de crear cuenta y poder enviar el formulario.
    condicionesCheckbox.addEventListener("change", function () {
        crearCuentaBoton.disabled = !condicionesCheckbox.checked;
    });

    //Con esto evitamos que se envíe el formulario si los datos no están correctos.
    document.querySelector("form").addEventListener("submit", function (e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });


    //Resetea los inputs cada vez que se refresca la página.
    document.querySelector("form").reset();
});
