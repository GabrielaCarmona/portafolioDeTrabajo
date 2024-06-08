import React, { useState } from 'react';
import TareaNueva from './TareaNueva';
import Tarea from './Tarea';
import '../stylesheets/ListaDeTareas.css';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim() !== '') {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else {
      alert('El texto de la tarea no puede estar vacío')
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return(tarea);
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaNueva onSubmit={agregarTarea} />
      <div className='lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id} 
              id={tarea.id} 
              texto={tarea.texto} 
              completada={tarea.completada} 
              eliminarTarea={eliminarTarea} 
              completarTarea={completarTarea} 
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;