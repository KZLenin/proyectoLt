import logo from './logoGatorade.png';
import logo1 from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo" alt="logo1" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://gatorade.lat/productos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Gatorade</h1>
        </a>
      </header>
    </div>
  );
}

export default App;