import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <Form
      action='https://formspree.io/xaynqlap'
      method='POST'
      className='text-dark'
    >
      <Form.Group controlId='formEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          required
        />
      </Form.Group>

      <Form.Group controlId='formName'>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder='Enter Name' name='name' required />
      </Form.Group>

      <Form.Group controlId=''>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows='5'
          placeholder='Enter Message'
          required
          name='message'
        ></Form.Control>
      </Form.Group>
      <div className='submit_container'>
        <Button
          variant='primary'
          type='submit'
          className='submit_button text-dark'
        >
          Send Message
        </Button>
      </div>
    </Form>
  );
}
