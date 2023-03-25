import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1> Contador </h1>
      <p>El contador es {counter}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default App;


/*

En ReactJS, el estado (state) es un objeto que representa la información interna de un componente 
y se utiliza para gestionar los datos y el comportamiento de un componente a lo largo del tiempo.

*/


