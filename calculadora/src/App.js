import './App.css';
import logoG from './Images/logoG.png';
import Boton from './components/Boton';
import Resultado from './components/Resultado';
import BotonClear from './components/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (isNaN(val)) {
      if (input !== "") {
        if (input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/')) {
          if (val !== ".") {
            setInput(input.slice(0, input.length - 1) + val);
          } else {
            setInput(input + '0.');
          }
        } else {
          setInput(input + val);
        }
      } else {
        alert('El primer valor ingresado debe ser un número.')
      }
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      if (!(input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/'))) {
        setInput(evaluate(input));
      } else {
        alert('El último valor ingresado debe ser un número.')
      }
    } else {
      alert('Es necesrio ingresar valores para realizar una operación.')
    }
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logoG}
          className='logoG'
          alt="Logo Gabriela Carmona" />
      </div>

      <div className='contenedor-calculadora'>
        <Resultado input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
