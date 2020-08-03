import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Foreground from './Foreground';
import Background from './Background';
import AliceQueenRun from './AliceQueenRun';
function App() {
  return (
    <div className="App">
            <Background />
            <div className="earth">
     <AliceQueenRun />
      <Foreground />
      </div>

    </div>
  );
}

export default App;
