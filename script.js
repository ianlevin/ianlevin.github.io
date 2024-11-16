// Lista de contraseñas (ya no importamos desde otro archivo)
const passwords = ["1234", "5678", "9012", "3456"]; // Modifica las contraseñas según necesites

let currentPasswordIndex = 0; // Índice de la contraseña actual

const pinInput = document.getElementById("pinInput");
const verifyButton = document.getElementById("verifyButton");
const message = document.getElementById("message");

// Verificar el PIN ingresado
verifyButton.addEventListener("click", () => {
    const userInput = pinInput.value.trim(); // Obtener valor del input

    if (userInput === passwords[currentPasswordIndex]) {
        currentPasswordIndex++;
        message.style.color = "green";

        if (currentPasswordIndex < passwords.length) {
            message.textContent = "¡Correcto! Ingresa el siguiente PIN.";
        } else {
            message.textContent = "¡Felicidades! Has completado todas las contraseñas.";
            verifyButton.disabled = true; // Deshabilitar el botón al terminar
        }
    } else {
        message.style.color = "red";
        message.textContent = "PIN incorrecto. Intenta nuevamente.";
    }

    pinInput.value = ""; // Limpiar el input
    pinInput.focus(); // Enfocar el input
});
