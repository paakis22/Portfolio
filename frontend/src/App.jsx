import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Education from './pages/Education.jsx';
// import Service from './pages/Services.jsx';
// import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        {/* <Route path='/service' element={<Service />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
