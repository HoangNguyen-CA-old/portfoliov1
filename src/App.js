import React from 'react';
import './App.scss';
import Cover from './components/Cover/Cover';
import Navbar from './components/Navbar/NavigationBar';
import About from './components/About/About';

export default function App() {
  return (
    <div className='page_wrapper'>
      <Cover />
      <Navbar />
      <About />
    </div>
  );
}
