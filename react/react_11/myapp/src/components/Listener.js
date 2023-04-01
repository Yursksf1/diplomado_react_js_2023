import React, { useEffect } from 'react';

function Listener() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.keyCode === 122) { // código para la tecla F11
        // lógica que se ejecutará al presionar control + f11
        console.log('escuchando F11')
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // asegúrate de pasar una matriz vacía como segundo argumento para que el efecto solo se ejecute una vez

  return <div>Mi componente</div>;
}

export default Listener;