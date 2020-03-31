import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GroupWrapper = styled(motion.div)``;
const SubmitContainer = styled(motion.div)``;

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
          <Form.Control type='email' name='email' required />
        </Form.Group>
      </GroupWrapper>

      <GroupWrapper variants={variant} initial={initial}>
        <Form.Group controlId='formName'>
          <Form.Label>Name:</Form.Label>
          <Form.Control name='name' required />
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
          ></Form.Control>
        </Form.Group>
      </GroupWrapper>

      <SubmitContainer variants={variant} initial={initial}>
        <Button
          variant='primary'
          type='submit'
          className='submit_button text-dark'
        >
          Send Message
        </Button>
      </SubmitContainer>
    </Form>
  );
}
