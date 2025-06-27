import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  const sectionStyle = { marginBottom: '1px' };
  return (
    <div style={{ backgroundColor: '#fffacd' }}>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
