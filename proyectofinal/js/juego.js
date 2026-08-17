// =====================================================
// JUEGO NÚMERO SECRETO
// =====================================================


// Generar número aleatorio entre 1 y 10

let numeroSecreto =
    Math.floor(Math.random() * 10) + 1;


// Cantidad máxima de intentos

let intentosRestantes = 3;


// Elementos HTML

const campoNumero =
    document.getElementById("numero");

const mensaje =
    document.getElementById("mensaje");

const contador =
    document.getElementById("intentos");


// =====================================================
// COMPROBAR NÚMERO
// =====================================================

function comprobarNumero() {

    const numeroIngresado =
        Number(campoNumero.value);


    // Validar campo vacío

    if (campoNumero.value.trim() === "") {

        mensaje.textContent =
            "⚠️ Debes escribir un número.";

        mensaje.style.color = "#facc15";

        return;
    }


    // Validar rango

    if (
        numeroIngresado < 1 ||
        numeroIngresado > 10
    ) {

        mensaje.textContent =
            "⚠️ El número debe estar entre 1 y 10.";

        mensaje.style.color = "#facc15";

        campoNumero.value = "";

        return;
    }


    // Validar si todavía tiene intentos

    if (intentosRestantes <= 0) {

        mensaje.textContent =
            "❌ Ya no tienes intentos. Inicia una nueva partida.";

        mensaje.style.color = "#ef4444";

        return;
    }


    // Restar intento

    intentosRestantes--;


    // =================================================
    // SI ACIERTA
    // =================================================

    if (numeroIngresado === numeroSecreto) {

        mensaje.textContent =
            "🎉 ¡Felicidades! ¡Has adivinado el número secreto!";

        mensaje.style.color = "#22c55e";

        contador.textContent =
            "¡Ganaste la partida!";

        campoNumero.value = "";

        return;
    }


    // =================================================
    // SI FALLA
    // =================================================

    if (numeroIngresado < numeroSecreto) {

        mensaje.textContent =
            "📈 El número secreto es mayor.";

    } else {

        mensaje.textContent =
            "📉 El número secreto es menor.";
    }


    mensaje.style.color = "#00d9ff";


    // Actualizar intentos

    contador.textContent =
        "Intentos restantes: " +
        intentosRestantes;


    // =================================================
    // SI PIERDE
    // =================================================

    if (intentosRestantes === 0) {

        mensaje.textContent =
            "❌ Has perdido. El número secreto era " +
            numeroSecreto + ".";

        mensaje.style.color = "#ef4444";

        contador.textContent =
            "Fin de la partida.";

    }


    // Limpiar campo

    campoNumero.value = "";

}


// =====================================================
// NUEVA PARTIDA
// =====================================================

function nuevaPartida() {

    numeroSecreto =
        Math.floor(Math.random() * 10) + 1;

    intentosRestantes = 3;

    campoNumero.value = "";

    mensaje.textContent =
        "🎮 ¡Nueva partida! Intenta adivinar.";

    mensaje.style.color = "#00d9ff";

    contador.textContent =
        "Intentos restantes: 3";

}