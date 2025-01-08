import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import ThreeScene from './components/three_scene';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/three-scene" element={<ThreeScene />} />
      </Routes>
    </Router>
  );
}

export default App;
