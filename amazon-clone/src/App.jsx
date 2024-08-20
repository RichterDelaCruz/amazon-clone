import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <nav>
          <Header />
        </nav>
      </Router>
    </>
  );
}

export default App
