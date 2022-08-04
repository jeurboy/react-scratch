import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="./pet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to pet list
        </a>
      </header>
    </div>
  );
}

export default App;
