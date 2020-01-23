import React from 'react';
import './App.scss';
import Cover from './components/Cover/Cover';
import Navbar from './components/Navbar/NavigationBar';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer/Footer';
import TechnologySection from './components/TechnologySection/TechnologySection';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className='page_wrapper'>
      <Cover />
      <Navbar />
      <ProjectSection />
      <TechnologySection />
      <hr className='m-0 p-0 bg-danger'></hr>
      <Contact />
      <Footer />
    </div>
  );
}
