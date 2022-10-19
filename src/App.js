import React from 'react';
import './App.css';
import Home from './pages/index';
import Contactus from './pages/contactus' 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Training from './pages/training';
import Consulting from './pages/consulting';
import Manufacturing from './pages/manufacturing';
import Construction from './pages/construction';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/contactus" element={<Contactus/>} exact />
      <Route path="/training" element={<Training />} exact/>
      <Route path="/consulting" element={<Consulting />} exact/>
      <Route path="/manufacturing" element={<Manufacturing />} exact/>
      <Route path="/construction" element={<Construction />} exact/>
      </Routes>
    </Router>
  
  )  
}

export default App;