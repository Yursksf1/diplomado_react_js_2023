import logo from './logo.svg';
import './App.css';

function App() {
  let hora = 13
  // horas = 25
  let saludo = ""

  if (hora > 6 &&  hora < 12) {
    saludo = "Hola Buenos dias"
  }
  if (hora > 12 &&  hora < 18) {
    saludo = "Hola Buenas tardes"
  }
  if (hora > 18 &&  hora < 24) {
    saludo = "Hola Buenas noches"
  }

  if (saludo) {
    return (
      <div className={saludo}> 
          <header className="App-time">
            {saludo}
          </header>
      </div>
    )
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Uni. Confenalco Santander
        </h1>
        <p>
          Estes el repositorio del diplomado de React Js:
        </p>
        <ul>
          <li>
            Html
          </li>

          <li>
            CSS
          </li>

          <li>
            JS
          </li>

          <li>
            React Js
          </li>
        </ul>
        <a
          className="App-link"
          href="https://github.com/Yursksf1/diplomado_react_js_2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo diplomado
        </a>
      </header>
    </div>
  );
}

export default App;
