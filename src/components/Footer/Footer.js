import React from 'react';
import './Footer.scss';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid={true} className='footer_container bg-dark'>
      Copyright © Hoang Nguyen 2019
    </Container>
  );
}
