import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Submit from './components/Submit';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Sample from './components/Sample';
import Sidebar from './components/Sidebar';
import MySubs from './components/MySubs';
import Status from './components/Status';


function App() {
  return (
    
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/mysubs" element={<MySubs />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
