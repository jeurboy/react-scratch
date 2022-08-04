import React from 'react'

import logo from './logo.svg'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="./agenda"
          target="_blank"
        >
          Tutorial agenda
        </a>
        <a
          className="App-link"
          href="./pet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to pet list (blank space)
        </a>
        <a
          className="App-link"
          href="./calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calculator
        </a>
      </header>
    </div>
  )
}

export default App