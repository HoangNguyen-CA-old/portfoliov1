import React from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const FormWrapper = styled.div`
  grid-column: 2/3;
`;

const Header = styled.h1`
  font-size: 2rem;
  grid-column: 1/4;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: 3rem;
`;

export default function Contact() {
  return (
    <MainContainer
      fluid={true}
      className='bg-light text-blue'
      id='contact_link'
    >
      <Header className='text-dark text-center'>Contact</Header>
      <FormWrapper>
        <ContactForm></ContactForm>
      </FormWrapper>
    </MainContainer>
  );
}
