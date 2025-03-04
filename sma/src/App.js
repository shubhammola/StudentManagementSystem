import React from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import StudentDetails from './components/StudentDetails';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ExtraCurricular from './components/ExtraCurricular';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/ExtraCurricular" element={<ExtraCurricular />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
      </div>
  );
}

export default App;