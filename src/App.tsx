import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import TopBooks from './components/TopBooks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TopBooks/>
    </div>
  );
}

export default App;
