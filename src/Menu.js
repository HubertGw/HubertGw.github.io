import React from 'react';
import HomePage from './components/HomePage'
import Chatroom from './components/ChatRoom'
import Login from './register/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './register/Register';
import App from "./App";
// Routing --------------------

const Menu = () => {
  return (
    <Router>
      <div>
        <div className='menu'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/chatroom">Czat</Link>
          <Link className='link' to="/game">Graj</Link>
          <Link className='link' to="/register">Rejestracja</Link>
          <Link to="/login"><button>Zaloguj</button></Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path='/game' element={<App/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Menu;