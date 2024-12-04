document.addEventListener("DOMContentLoaded", function(){
    //Accedo a los elementos del formulario para trabajar con ellos posteriormente.
    const nombreInput = document.getElementById("nombre");
    const passwordInput = document.getElementById("password");
    const poblacionInput = document.getElementById("poblacion");
    const formulario = document.getElementById("formulario");
    const nombreError = document.getElementById("nombre-error");
    const passwordError = document.getElementById("password-error");
    const poblacionError = document.getElementById("poblacion-error");
    
    // Función para validar el formulario.
    function validarFormulario() {
        //Creo variable para verificar si es válido y la inicializo en true.
        let esValido = true;

        //Si el nombre está vacío o el nombre tiene menos de 8 caracteres, muestra mensaje de error.
        if (nombreInput.value.trim() === "" || nombreInput.value.length < 8) {
            nombreError.textContent = "El nombre debe tener al menos 8 caracteres y no debe estar vacío."; //Muestra mensaje de error.
            nombreInput.classList.add("input-error"); //Se añade la clase "input-error" al elemento nombreInput para aplicar estilos de error.
            esValido = false; // No es válido
        } else {
            nombreError.textContent = ""; // El error se deja vacío, no se añade nada.
            nombreInput.classList.remove("input-error"); // Se elimina la clase y no se se aplican estilos. 
        }

        //Creo el patrón para validar el correo electrónico que el usuario introduzca.
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;

        //Si el email no coincide con el patrón, se muestra mensaje de error.
        if (!passwordPattern.test(passwordInput.value)) {
            passwordError.textContent = "La contraseña debe tener entre 6 y 10 caracteres alfanuméricos, y al menos una letra mayúscula y un dígito."; //Mensaje de error.
            passwordInput.classList.add("input-error"); //Se añade la clase "input-error" al elemento nombreInput para aplicar estilos de error.
            esValido = false; // No es válido.
        } else {
            passwordError.textContent = ""; // El error se deja vacío, no se añade nada.
            passwordInput.classList.remove("input-error"); // Se elimina la clase y no se se aplican estilos.
        }

        //Si la población se deja vacía, muestra mensaje de error.
        if (poblacionInput.value === "") {
            poblacionError.textContent = "Debes seleccionar una población.";
            poblacionInput.classList.add("input-error");
            esValido = false;
        } else {
            poblacionError.textContent = "";
            poblacionInput.classList.remove("input-error");
        }

        return esValido; //se valida el formulario y se envía.
    }

    //Esto evita que se envíe el formulario si los campos no están correctos.
    formulario.addEventListener("submit", function(e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });
});