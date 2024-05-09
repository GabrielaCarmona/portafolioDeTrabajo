const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-tareas');

function agregarTarea() {
  if (input.value) {
    //Crear el espacio de la nueva tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    //Obtener el texto ingresado
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //Crear clase y contenedor de íconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    //Agregar íconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar)

    //Agregar la tarea a la lista
    listaDeTareas.appendChild(tareaNueva);
    input.value = '';
  } else {
    alert('¡No has ingresado un texto para tu tarea!');
  }
}

function completarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

//Agrega la tarea con el mouse
function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

//Agrega la tarea con la tecla Enter
boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
})