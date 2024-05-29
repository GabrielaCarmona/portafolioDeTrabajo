import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que los profesionales opinan de nuestros servicios:</h1>
      <Testimonio 
      nombre='Crhis Scott'
      pais='Suecia'
      imagen='persona1'// Foto de Vicky Hladynets en Unsplash
      cargo='Ingeniero de software'
      empresa='Oracle'
      testimonio='Cras pharetra consequat lorem posuere euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae egestas odio. Sed hendrerit aliquam condimentum. Curabitur pretium justo rhoncus purus fermentum, vel lacinia magna consequat. Mauris vestibulum vestibulum libero sit amet accumsan.'
       />

<Testimonio 
      nombre='Grazia Massini'
      pais='Italia'
      imagen='persona2' // Foto de Andrea Piacquadio en pexels.com
      cargo='Ingeniera de software'
      empresa='Amazon'
      testimonio='Pellentesque sed mi lobortis, pulvinar enim et, finibus justo. Suspendisse ac felis quis lectus molestie pellentesque. Nunc congue sem dui, vitae auctor odio euismod non. Quisque bibendum diam vitae justo facilisis, sed fermentum diam mattis. Vestibulum sit amet nulla convallis, bibendum arcu in, accumsan libero.'
       />

<Testimonio 
      nombre='Manuel Cortéz'
      pais='México'
      imagen='persona3' // Foto de Stefan Stefancik en pexels.com
      cargo='Ingeniero de software'
      empresa='Google'
      testimonio='Suspendisse iaculis urna velit, a bibendum tortor blandit quis. Mauris eros ligula, molestie dapibus ligula eget, convallis consequat mauris. Aenean nec tortor rhoncus, gravida mauris id, elementum dolor. Aliquam erat volutpat. Vivamus tempus sapien erat, sit amet aliquet justo pulvinar vel. Nulla at porttitor nibh.'
       />
      </div>
    </div>
  );
}

export default App;
