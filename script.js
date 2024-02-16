function reproducirAudio(nombreArchivo) {
    const audio = new Audio(`audios/${nombreArchivo}`);
    audio.play();
}

function verificarRespuesta(imagen, silaba) {
    reproducirAudio(`${imagen}.mp3`); // Asumiendo que cada imagen tiene su propio audio descriptivo.
    const correctas = {
        'CO': 'conejo',
        'RA': 'rana'
    };

    if (imagen === correctas[silaba]) {
        mostrarResultado(true, imagen);
    } else {
        mostrarResultado(false, imagen);
    }
}

function mostrarResultado(esCorrecto, imagen) {
    const seleccion = document.querySelector(`img[alt="${imagen.charAt(0).toUpperCase() + imagen.slice(1)}"]`);
    if (esCorrecto) {
        reproducirAudio('aplauso.mp3');
        reproducirAudio('correcto.mp3');
        seleccion.classList.add('correcta');
        setTimeout(() => {
            cambiarPagina();
        }, 3000);
    } else {
        reproducirAudio('incorrecto.mp3');
        
    }
}

function cambiarPagina() {
    const paginaActual = document.querySelector('.pagina:not([style*="display: none"])');
    const siguientePagina = paginaActual.nextElementSibling;
    if (siguientePagina) {
        paginaActual.style.display = 'none';
        siguientePagina.style.display = 'block';
    }
}
