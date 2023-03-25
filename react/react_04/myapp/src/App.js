import logo from './logo.svg';
import './App.css';
import Student from './components/Students';

function App(props) {
  return (
    <div>
      <h1>Información de los estudiantes del diplomado de React:</h1>
      <Student name="Carlos Gomez" githubName='cgomez2305' github='https://github.com/cgomez2305' />
      <Student name="Luis Silva" githubName='lizvillabona' github='https://github.com/lizvillabona' />
      <Student name="Liz Villabona" githubName='silpos' github='https://github.com/silpos' />
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