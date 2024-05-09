const cronometro = document.getElementById('cronometro');
const btnInicio = document.getElementById('btn-inicio');
const btnReinicio = document.getElementById('btn-reinicio');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const formatoSegundos = asignarFormato(segundos);
  const formatoMinutos = asignarFormato(minutos);
  const formatoHoras = asignarFormato(horas);

  cronometro.innerText = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

btnInicio.addEventListener('click', function () {
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    btnInicio.innerHTML = '<i class="bi bi-pause-fill"></i>';
    btnInicio.classList.remove('iniciar');
    btnInicio.classList.add('pausar');
    estadoCronometro = 'activo';
  } else {
    window.clearInterval(intervaloDeTiempo);
    btnInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
    btnInicio.classList.remove('pausar');
    btnInicio.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

btnReinicio.addEventListener('click', function () {
  window.clearInterval(intervaloDeTiempo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = '00:00:00';

  btnInicio.innerHTML = '<i class="bi bi-play-fill"></i>';
  btnInicio.classList.remove('pausar');
  btnInicio.classList.add('iniciar');

  estadoCronometro = 'pausado';
})