import React from 'react';
import './ContactForm.scss';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <div className='icon_container'>
          <a
            href='https://github.com/HoangNguyen-CA'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='icon_div'>
              <FontAwesomeIcon
                icon={faGithub}
                className='contact_icon github_icon'
              ></FontAwesomeIcon>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/hoang-nguyen-a36636196/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='icon_div'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='contact_icon linkedin_icon ml-3'
              />
            </div>
          </a>
        </div>
      </div>
    </Form>
  );
}
