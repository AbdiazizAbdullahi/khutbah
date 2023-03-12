import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Upload from './components/Upload';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import AllKhutbah from './components/AllKhutbah';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allkhutbah" element={<AllKhutbah />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
