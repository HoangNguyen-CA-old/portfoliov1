import React from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import { breakpoints } from './localvars';

const FormWrapper = styled.div``;

const Header = styled.h1`
  font-size: 2rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 3.5rem;
  @media ${breakpoints[1]} {
    padding: 3rem 20%;
  }
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
