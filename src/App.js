import React from 'react'
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='eduka/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App
