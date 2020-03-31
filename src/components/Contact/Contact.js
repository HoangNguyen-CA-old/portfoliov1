import React, { useState } from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import { breakpoints } from './localvars';
import { motion } from 'framer-motion';
import { theme } from '../../variables';
import ScrollTrigger from 'react-scroll-trigger';

const FormWrapper = styled(motion.div)``;

const Header = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${theme.darkerPrimary};
  text-align: center;
  margin-bottom: 1.5rem;
`;

const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.secondary};
  padding: 3rem 3.5rem;
  @media ${breakpoints[1]} {
    padding: 3rem 20%;
  }
`;

const variant = {
  open: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
};

const headerVariant = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

const initial = { opacity: 0 };

export default function Contact() {
  const [isOpen, setOpen] = useState(false);
  const handleAnimate = () => {
    setOpen(true);
  };

  return (
    <MainContainer animate={isOpen ? 'open' : 'closed'} id='contact_link'>
      <FormWrapper variants={variant}>
        <Header
          onClick={() => {
            setOpen(!isOpen);
          }}
          variants={headerVariant}
          initial={initial}
        >
          Contact
        </Header>
        <ScrollTrigger onEnter={handleAnimate}></ScrollTrigger>

        <ContactForm></ContactForm>
      </FormWrapper>
    </MainContainer>
  );
}
