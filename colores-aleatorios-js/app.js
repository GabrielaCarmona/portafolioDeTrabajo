// Seleccionar lo elementos de DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function AleatorioHEX() {
  let digitos = '0123456789ABCDEF';
  let colorHEX = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHEX += digitos[indiceAleatorio];
  }

  return colorHEX;
}

boton.addEventListener('click', function() {
  let colorAleatorio = AleatorioHEX();
  // Actualizar el texto
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});