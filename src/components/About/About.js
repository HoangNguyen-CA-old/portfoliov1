import React from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';
import posed from 'react-pose';

const Wrapper = posed(Container)({
  open: {},
  closed: {}
});

export default function About() {
  return (
    <Wrapper fluid={true} className='text-center bg-secondary about_section'>
      <h3 className='text-warning about_header'>About Me</h3>
      <p className='about_desc'>
        I'm a web developer based in Toronto, Canada.w
        <br></br>
      </p>
    </Wrapper>
  );
}
