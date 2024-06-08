import React, { useState } from "react";
import '../stylesheets/TareaNueva.css';
import { v4 as uuidv4 } from 'uuid';

function TareaNueva(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return (
        <form className='tarea-nueva' onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Ingresa una nueva tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='btnTarea'>Agregar Tarea</button>
        </form>
    );
}

export default TareaNueva;