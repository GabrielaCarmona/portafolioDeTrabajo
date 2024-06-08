import './App.css';
import logoG from './images/logoG.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
  <div className='app-tareas'>
      <div className='logoG-contenedor'>
        <img className='logoG' src={logoG} alt='Logo Gabriela Carmona' />
      </div>

      <div className='tareas-contenedor'>
        <h1>Lista de Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;