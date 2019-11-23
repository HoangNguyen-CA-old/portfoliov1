import React from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <div className='about_section'>
      <h3 className='about_header'>About Me</h3>
      <p className='about_content'>
        I'm a web developer based in Toronto, Canada.
      </p>
    </div>
  );
}
