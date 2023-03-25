import logo from './logo.svg';
import './App.css';
import Student from './components/Students';

function App(props) {
  return (
    <div>
      <h1>Información de los estudiantes del diplomado de React:</h1>
      <Student 
        img='https://avatars.githubusercontent.com/u/109111244?v=4' 
        name="Carlos Gomez" 
        githubName='cgomez2305' 
        github='https://github.com/cgomez2305' 
      />

      <Student 
        img='https://avatars.githubusercontent.com/u/125324104?v=4' 
        name="Luis Silva" 
        githubName='lizvillabona' 
        github='https://github.com/lizvillabona' 
      />

      <Student 
        img='https://avatars.githubusercontent.com/u/86244046?v=4' 
        name="Liz Villabona" 
        githubName='silpos' 
        github='https://github.com/silpos' 
      />

    </div>
  );
}

export default App;


/*

En ReactJS, las props (abreviatura de "propiedades") 
son una forma de pasar datos de un componente padre a un componente hijo. 
Las props son objetos que contienen datos que pueden ser utilizados por un componente hijo 
para renderizar su interfaz de usuario.

*/

/*
Actividad:
al componente previamente descrito (Student), 
agregar un nuebo prop que ingrese el link de la imagen de usuario de github
- Configurar unos estilos a la imagen: 
  - ancho de 300 px
  - alto de 300 px
  - borde redondeado 
- modificar el componente para recibir la imagen y mostrarla en el navegador 
*/