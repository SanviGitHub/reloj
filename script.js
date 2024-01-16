let countdown;
let timerDisplay = document.getElementById('timer');
let audio = document.getElementById('audio'); // Obtén el elemento de audio

function startTimer() {
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    let totalSeconds = (parseInt(minutesInput.value) || 0) * 60 + (parseInt(secondsInput.value) || 0);

    if (totalSeconds <= 0) {
        alert('Por favor, ingresa un tiempo válido.');
        return;
    }

    function displayTime() {
        const minutes = Math.floor(totalSeconds / 60);
        const remainderSeconds = totalSeconds % 60;
        const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        timerDisplay.textContent = display;

        // Agrega la reproducción del sonido cuando llega a 1 segundo
        if (totalSeconds === 1) {
            audio.play();
        }
    }

    function timer() {
        displayTime();
        if (totalSeconds === 0) {
            clearInterval(countdown);
            alert('¡Tiempo terminado!');
        } else {
            totalSeconds--;
        }
    }

    // Detener el temporizador anterior antes de iniciar uno nuevo
    clearInterval(countdown);
    // Mostrar el tiempo inicial
    displayTime();
    // Iniciar el nuevo temporizador
    countdown = setInterval(timer, 1000);
}

// Permitir iniciar el temporizador al presionar "Enter"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        startTimer();
    }
});
