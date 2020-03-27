import React from 'react';
import Cover from './components/Cover/Cover';
import Navbar from './components/NavigationBar';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className='page_wrapper'>
      <Cover />
      <Navbar />
      <ProjectSection />
      <Skills />
      <hr className='m-0 p-0 bg-danger'></hr>
      <Contact />
      <Footer />
    </div>
  );
}
