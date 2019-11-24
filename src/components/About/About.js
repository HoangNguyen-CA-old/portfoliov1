import React from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container className='about_section'>
      <h3 className='about_header'>About Me</h3>
      <p className='about_content'>
        I'm a web developer based in Toronto, Canada.<br></br>
        I'm very open minded and eager to learn.
      </p>
    </Container>
  );
}
