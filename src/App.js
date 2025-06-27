import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
