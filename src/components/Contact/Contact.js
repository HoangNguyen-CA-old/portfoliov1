import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 2rem;
`;

const MainContainer = styled.div`
  padding: 3rem 5rem;
`;

export default function Contact() {
  return (
    <MainContainer
      fluid={true}
      className='bg-light text-blue'
      id='contact_link'
    >
      <Header className='text-dark text-center'>Contact</Header>
      <hr></hr>
      <Container>
        <Row>
          <Col xs={12}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}
