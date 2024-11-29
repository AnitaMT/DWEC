function validarFormulario(event){
    event.preventDefault(); // Evita el envío si los campos no son correctos.

    // Accedo a los elementos del formulario para poder trabajar con ellos (validarlos).
    const password = document.getElementById('password');
    const passwordRep = document.getElementById('passwordRep');
    const indicio = document.getElementById('indicio');

    // Creo el patrón para la contraseña
    const patronPassword = /^[A-Z][A-Za-z\d]{5,}$/;

    // Comprueba si la contraseña NO coincide con el patrón. Si no coincide, no envía el formulario.
    if(!patronPassword.test(password.value)){
        // Muestra mensaje de advertencia.
        alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito.");
        password.focus(); // Toma el foco.
        password.select(); // Selecciona el contenido.
        return false; // No envía los datos.
    }

    // Comprueba si la repetición de la contraseña NO es igual a la primera contraseña. Si no coinciden, no envía el formulario.
    if(passwordRep.value != password.value){
        alert("Las contraseñas escritas no coindicen. Vuelve a intentarlo");
        passwordRep.focus();
        passwordRep.select();
        return false;
    }

    // Comprueba si en alguna parte del textarea se incluye la contraseña. Si esto ocurre, no envía el formulario.
    if(indicio.value.includes(password.value)){
        alert("El indicio de contraseña no puede contener la contraseña.");
        indicio.focus();
        indicio.select();
        return false;
    }

    event.target.submit(); // Se envía el formulario si todo está correcto.
    return true; // Devuelce true si todos los campos están rellenos correctamente.
}

//Función para que al recargar la página se vacíen los campos que permanecen rellenos por defecto
window.onload = function () {
    document.getElementById('indicio').value = ''; // Limpiar textarea
    document.getElementById('check').checked = false; // Deseleccionar checkbox
};