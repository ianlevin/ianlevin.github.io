// Cargar las contraseñas desde passwords.js
import { passwords } from './passwords.js';

let currentIndex = 0;

const pinInput = document.getElementById("pinInput");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

submitButton.addEventListener("click", () => {
    const userInput = pinInput.value;
    if (userInput === passwords[currentIndex]) {
        message.style.color = "green";
        message.textContent = "¡Correcto! Ahora pasa al siguiente PIN.";
        currentIndex++;
        pinInput.value = "";

        if (currentIndex >= passwords.length) {
            message.textContent = "¡Felicitaciones! Has completado todos los PINs.";
            pinInput.disabled = true;
            submitButton.disabled = true;
        }
    } else {
        message.style.color = "red";
        message.textContent = "Número incorrecto. Intenta de nuevo.";
    }
});
