// Función de validación
function validacion(event) {
    // Evito que el formulario se envíe de forma predeterminada.
    event.preventDefault();

    // Accedo a los elementos del formulario para trabajar con ellos.
    const nombreInput = document.getElementById("nombre");
    const primerApellidoInput = document.getElementById("primerApellido");
    const segundoApellidoInput = document.getElementById("segundoApellido");
    const telefonoInput = document.getElementById("telefono");
    const emailInput = document.getElementById("email"); 
    const passwordInput = document.getElementById("password"); 
    const sexoRadios = document.getElementsByName("sexo"); 
    const nivelRadios = document.getElementsByName("nivel"); 

    // Creo un array para almacenar los errores y una variable para el primer campo erróneo.
    let errores = []; // Array donde se guardan los mensajes de error.
    let primerCampoErroneo = null; // Variable que apunta al primer campo con error.

    // Validación del campo Nombre
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular que permite letras, espacios, tildes y la letra ñ.
    if (!nombreRegex.test(nombreInput.value.trim())) {
        errores.push("El campo 'Nombre' no puede contener números ni caracteres especiales."); // Mensaje de error si no cumple el formato.
        primerCampoErroneo = primerCampoErroneo || nombreInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Primer Apellido
    if (!nombreRegex.test(primerApellidoInput.value.trim())) {
        errores.push("El campo 'Primer apellido' no puede contener números ni caracteres especiales."); // Mensaje de error si no cumple el formato.
        primerCampoErroneo = primerCampoErroneo || primerApellidoInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Segundo Apellido
    if (!nombreRegex.test(segundoApellidoInput.value.trim())) {
        errores.push("El campo 'Segundo apellido' no puede contener números ni caracteres especiales."); // Mensaje de error si no cumple el formato.
        primerCampoErroneo = primerCampoErroneo || segundoApellidoInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Teléfono
    const telefonoRegex = /^\d{3} \d{2} \d{2} \d{2}$/; // Expresión regular que valida el formato 123 45 67 89.
    if (!telefonoRegex.test(telefonoInput.value)) {
        errores.push("El campo 'Teléfono' debe tener el formato 123 45 67 89."); // Mensaje de error si no cumple el formato.
        primerCampoErroneo = primerCampoErroneo || telefonoInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un email.
    if (!emailRegex.test(emailInput.value)) {
        errores.push("El campo 'Email' debe contener una dirección de correo válida."); // Mensaje de error si no cumple el formato.
        primerCampoErroneo = primerCampoErroneo || emailInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Contraseña
    if (passwordInput.value.trim() === "") { //Si la contraseña está vacía.
        errores.push("El campo 'Contraseña' es obligatorio."); // Mensaje de error si está vacío.
        primerCampoErroneo = primerCampoErroneo || passwordInput; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Sexo
    let sexoSeleccionado = false; // Variable para comprobar si algún radio button está seleccionado.
    for (const radio of sexoRadios) {
        if (radio.checked) {
            sexoSeleccionado = true; // Si uno está seleccionado, marcamos como válido.
            break; // Salimos del bucle porque ya encontramos una opción seleccionada.
        }
    }
    if (!sexoSeleccionado) {
        errores.push("Debe seleccionar una opción en el campo 'Sexo'."); // Mensaje de error si no se seleccionó nada.
        primerCampoErroneo = primerCampoErroneo || sexoRadios[0]; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Validación del campo Nivel de estudios
    let nivelSeleccionado = false; // Variable para comprobar si algún radio button está seleccionado.
    for (const radio of nivelRadios) {
        if (radio.checked) {
            nivelSeleccionado = true; // Si uno está seleccionado, marcamos como válido.
            break; // Salimos del bucle porque ya encontramos una opción seleccionada.
        }
    }
    if (!nivelSeleccionado) {
        errores.push("Debe seleccionar una opción en el campo 'Nivel de estudios'."); // Mensaje de error si no se seleccionó nada.
        primerCampoErroneo = primerCampoErroneo || nivelRadios[0]; // Asigno el primer campo con error si no ha sido asignado.
    }

    // Si hay errores, los muestro en una alerta y enfoco el primer campo erróneo.
    if (errores.length > 0) {
        alert("Se encontraron los siguientes errores:\n" + errores.join("\n")); // Muestra los errores acumulados en un alert.
        primerCampoErroneo.focus(); // Enfoco el primer campo que tiene errores.
    } else {
        // Si no hay errores, muestro un mensaje de éxito.
        alert("Datos enviados correctamente."); // Mensaje de confirmación.
    }
}
