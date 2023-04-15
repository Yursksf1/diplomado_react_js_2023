import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

function App() {

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo/>
    </div>
  );
}

export default App;
