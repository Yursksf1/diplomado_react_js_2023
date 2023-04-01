import React, { useRef } from 'react';

function App() {
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  function handleClickButtom() {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleClickMiddle() {
    middleRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleClickTop() {
    topRef.current.scrollIntoView({ behavior: 'smooth' });

    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <button onClick={handleClickButtom}>Scroll abajo</button>
      <button onClick={handleClickMiddle}>Scroll medio</button>
      <div ref={topRef}>Top</div>
      <div style={{ height: '1000px' }}></div>
      <div ref={middleRef}>middle</div>

      <div style={{ height: '1000px' }}></div>
      <div ref={bottomRef}>buttom</div>
      <button onClick={handleClickTop}>Scroll arriba</button>
    </div>
  );
}

export default App;