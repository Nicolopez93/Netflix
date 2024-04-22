import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Account from './pages/Account';


function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
