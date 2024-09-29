import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Login from './components/Login'

import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header /> {/* The header containing navigation links */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/products" element={<Products />} /> {/* Products page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
        </Routes>
      </Router>
    </>
  );
}

export default App
