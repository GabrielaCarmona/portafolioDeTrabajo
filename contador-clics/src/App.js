import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoG from './images/logoG.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo-G'
          src={logoG}
          alt='logo de Gabriela Carmona'
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClics= {numClics} />

        <Boton
          texto='Clic'
          btnClic={true}
          manejarClic={manejarClic} />

        <Boton
          texto='Reiniciar'
          btnClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;