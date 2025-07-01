import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { getHome } from './utilities/getData';



function App() {
  const [msg, setMsg] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHome(location.pathname);
        setMsg(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  fetchData();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <h1>{msg}</h1>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;