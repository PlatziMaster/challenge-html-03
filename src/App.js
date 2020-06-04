import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ErrorCuatroCeroCuatro from './Components/404';

function App() {
  return (
    <div className="App">
      <div className="Hero">
        <div className="Hero-container">
          <NavBar />
          <ErrorCuatroCeroCuatro />
        </div>
      </div>
    </div>
  );
}

export default App;
