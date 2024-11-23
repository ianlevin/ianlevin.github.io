const passwords = ["9279", "9774", "4667", "1735"]; // Contraseñas
const hints = [
    "Cuando llego a tu casa tengo que....", 
    "Que ganas de un masaje no??", 
    "Quiero un mate ian....", 
    "💩",
    "Mira la habitacion mi amor..."
]; // Pistas correspondientes

const additionalHints = [
    "Te las lavaste bien ian...",
    "Algun dia vas a tener uno donde entremos...",
    "Buscame otra que esta tapada...",
    "Donde voy cuando...",
    ""
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


