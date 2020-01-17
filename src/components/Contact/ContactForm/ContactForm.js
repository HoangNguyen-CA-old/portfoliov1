import React from 'react';
import './ContactForm.scss';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import posed from 'react-pose';

const PosedButton = posed(Button)({
  hoverable: true,
  init: {},
  hover: {}
});

let PosedDiv = posed.div({
  hoverable: true,
  init: {
    color: 'gray'
  },
  hover: {
    color: 'red'
  }
});

export default function ContactForm() {
  return (
    <Form action='https://formspree.io/xaynqlap' method='POST'>
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
        <PosedButton variant='primary' type='submit' className='submit_button'>
          Send Message
        </PosedButton>
        <div className='icon_container'>
          <a href='https://github.com/HoangNguyen-CA' target='_blank'>
            <PosedDiv className='icon_div'>
              <FontAwesomeIcon
                icon={faGithub}
                className='contact_icon github_icon'
              ></FontAwesomeIcon>
            </PosedDiv>
          </a>
          <a
            href='https://www.linkedin.com/in/hoang-nguyen-a36636196/'
            target='_blank'
          >
            <PosedDiv className='icon_div'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className='contact_icon linkedin_icon ml-3'
              />
            </PosedDiv>
          </a>
        </div>
      </div>
    </Form>
  );
}
