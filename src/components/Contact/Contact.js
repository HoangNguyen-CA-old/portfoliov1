import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
  return (
    <Container fluid={true} className='bg-light text-blue' id='contact_link'>
      <h6 className='contact_header text-dark text-center'>Contact</h6>
      <hr></hr>
      <Container>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <ContactForm />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
    </Container>
  );
}