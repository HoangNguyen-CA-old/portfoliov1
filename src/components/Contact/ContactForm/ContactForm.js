import React from 'react';
import './ContactForm.scss';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import posed from 'react-pose';

const PosedButton = posed(Button)({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  }
});

export default function ContactForm() {
  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' required />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder='Enter Name' required />
      </Form.Group>

      <Form.Group controlId=''>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as='textarea'
          rows='5'
          placeholder='Enter Message'
          required
        ></Form.Control>
      </Form.Group>
      <div className='submit_container'>
        <PosedButton variant='primary' type='submit' className='submit_button'>
          Send Message
        </PosedButton>
        <div>
          <a href='https://github.com/HoangNguyen-CA' target='_blank'>
            <FontAwesomeIcon
              icon={faGithub}
              className='contact_icon github_icon'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/hoang-nguyen-a36636196/'
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='contact_icon linkedin_icon ml-3'
            />
          </a>
        </div>
      </div>
    </Form>
  );
}
