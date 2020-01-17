import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faNodeJs,
  faNpm
} from '@fortawesome/free-brands-svg-icons';

export default function Project2Modal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Shopping List App</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className=''>
        <h5 className='mt-3'>BackEnd</h5>
        <Container>
          <h6 className='text-success'>Express and NodeJS</h6>
          <p>
            Used to create a REST API for the frontend to communicate with. Used
            mongoose to communicate with a cloud database(MongoDB Atlas) to
            fetch, create, and delete data.
          </p>
          <h6 className='text-success'>MongoDB</h6>
          <p>
            Used to store items in the shopping list, along with user
            information like name, email, and password (hashed using bcrypt).
          </p>
        </Container>
        <h5 className='mt-3'>FontEnd</h5>
        <Container>
          <h6 className='text-success'>React</h6>
          <p>
            Used purely functional components with hooks to keep track of local
            state, communicate with global state, replicate lifecyle methods,
            and more.
          </p>
          <h6 className='text-success'>Redux</h6>
          <p>
            Used to keep track of global state. State stores the shopping list
            items, stores JWT tokens for user authentication, and more.
          </p>
          <h6 className='text-success'>Bootstrap</h6>
          <p>Used react-bootstrap for basic styling.</p>
          <h6 className='text-success'>Axios</h6>
          <p>
            Used to make GET, POST, and DELETE requests to the backend server
            and to update the global state according to the response.
          </p>
        </Container>
      </Modal.Body>
    </>
  );
}
