let btnSiguiente = document.getElementById('btn-cita');
let textoCita = document.getElementById('cita');
let textoPoema = document.getElementById('poema');

function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = enteroAleatorio(0, citas.length);
    textoCita.innerText = `"${citas[indiceAleatorio].texto}"`;
    textoPoema.innerText = citas[indiceAleatorio].poema;
}

cambiarCita();

btnSiguiente.addEventListener('click', cambiarCita);