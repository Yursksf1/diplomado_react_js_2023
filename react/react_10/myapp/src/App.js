import React, { useRef } from 'react';

function App() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  function handleClick() {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleClickTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <button onClick={handleClick}>Scroll to buttom</button>
      <div style={{ height: '1000px' }}></div>
      <div ref={topRef}>Top of page</div>
      <button onClick={handleClickTop}>Scroll to top</button>

    </div>
  );
}

export default App;