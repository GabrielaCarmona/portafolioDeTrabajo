import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, btnClic, manejarClic }) {
  return (
    <button
      className={btnClic ? 'btnClic' : 'btnReiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;