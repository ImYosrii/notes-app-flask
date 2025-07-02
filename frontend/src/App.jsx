import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { getHome } from './utilities/getData';



function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup  />} />
      </Routes>
    </>
  );
}

export default App;