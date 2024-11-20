const passwords = ["1234", "5678", "9012", "3456"]; // Contraseñas
const hints = [
    "En este lugar podes ver un reflejo tuyo, podes limpiar lo sucio, podes desechar lo inutil.", 
    "Pista 2: Empieza con 5", 
    "Pista 3: Comienza con 9", 
    "Pista 4: Es un número consecutivo"
]; // Pistas correspondientes

const additionalHints = [
    "Pista adicional 1: Es un número con un solo dígito repetido",
    "Pista adicional 2: Está en el rango de 5000-6000",
    "Pista adicional 3: El primer dígito es mayor que 8",
    "Pista adicional 4: Los números están en orden secuencial"
]; // Pistas adicionales

let currentPasswordIndex = 0; // Índice de la contraseña actual

const pinInput = document.getElementById("pinInput");
const verifyButton = document.getElementById("verifyButton");
const message = document.getElementById("message");
const hintMessage = document.getElementById("hintMessage"); // Elemento para mostrar las pistas
const showHintButton = document.getElementById("showHintButton"); // Botón para mostrar pistas adicionales
const additionalHintMessage = document.getElementById("additionalHintMessage"); // Elemento para mostrar la pista adicional

// Mostrar la primera pista al cargar la página
hintMessage.textContent = hints[currentPasswordIndex];
additionalHintMessage.textContent = ""; // Inicialmente no mostramos pistas adicionales

verifyButton.addEventListener("click", () => {
    const userInput = pinInput.value.trim(); // Obtener el valor del input

    if (userInput === passwords[currentPasswordIndex]) {
        currentPasswordIndex++; // Aumentar el índice para la siguiente contraseña
        message.style.color = "green"; // Cambiar color a verde para indicar éxito

        if (currentPasswordIndex < passwords.length) {
            message.textContent = "¡Correcto! Ingresa el siguiente PIN."; // Mensaje de éxito
            hintMessage.textContent = hints[currentPasswordIndex]; // Mostrar la siguiente pista
        } else {
            message.textContent = "¡Felicidades! Has completado todas las contraseñas."; // Mensaje de éxito final
            verifyButton.disabled = true; // Deshabilitar el botón cuando se completan todas las contraseñas
            showHintButton.disabled = true; // Deshabilitar el botón de pistas adicionales cuando ya se han completado
        }
    } else {
        message.style.color = "red"; // Cambiar color a rojo para indicar error
        message.textContent = "PIN incorrecto. Intenta nuevamente."; // Mensaje de error
    }

    pinInput.value = ""; // Limpiar el campo de entrada después de cada intento
    pinInput.focus(); // Enfocar el input nuevamente
});

// Mostrar pista adicional cuando se presione el botón
showHintButton.addEventListener("click", () => {
    additionalHintMessage.textContent = additionalHints[currentPasswordIndex]; // Mostrar la pista adicional correspondiente
});


