import { useState, useEffect, use } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';



function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedin) {
      navigate('/login')
    }
  }, [loggedin])

  return (
    <>
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home  user={user}/>} />
        <Route path="/login" element={<Login 
                                        loggedin={loggedin} 
                                        setLoggedin={setLoggedin}
                                        setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;