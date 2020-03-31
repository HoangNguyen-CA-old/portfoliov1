import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../variables';

const GroupWrapper = styled(motion.div)``;
const SubmitContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const CustomButton = styled(Button)`
  background-color: ${theme.primary};
  color: ${theme.dark};
`;

const variant = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

const initial = { opacity: 0 };

export default function ContactForm() {
  return (
    <Form
      action='https://formspree.io/xaynqlap'
      method='POST'
      className='text-dark'
    >
      <GroupWrapper variants={variant} initial={initial}>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
            className='bg-dark text-light'
          />
        </Form.Group>
      </GroupWrapper>

      <GroupWrapper variants={variant} initial={initial}>
        <Form.Group controlId='formName'>
          <Form.Label>Name:</Form.Label>
          <Form.Control name='name' required className='bg-dark text-light' />
        </Form.Group>
      </GroupWrapper>

      <GroupWrapper variants={variant} initial={initial}>
        <Form.Group controlId=''>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as='textarea'
            rows='5'
            required
            name='message'
            className='bg-dark text-light'
          ></Form.Control>
        </Form.Group>
      </GroupWrapper>

      <SubmitContainer variants={variant} initial={initial}>
        <CustomButton variant='primary' type='submit' className=''>
          Send Message
        </CustomButton>
      </SubmitContainer>
    </Form>
  );
}
