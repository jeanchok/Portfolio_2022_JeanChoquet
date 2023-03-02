import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Accueil from './page/Accueil';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Accueil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projets" element={<Portfolio />} />
        <Route path="competences" element={<Competences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
