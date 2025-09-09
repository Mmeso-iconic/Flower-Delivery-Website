import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar.js';
import Flowers from './pages/flowers.js';
import Addflower from './pages/addflower.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Redirect / to /flowers */}
        <Route path="/" element={<Navigate to="/flowers" />} />
        <Route path="/flowers" element={<Flowers />} /> 
        <Route path="/addflower" element={<Addflower />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
