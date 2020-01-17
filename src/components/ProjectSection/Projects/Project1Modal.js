import React from 'react';
import { Modal, Container } from 'react-bootstrap';

//Nested inside a Modal
export default function Project1Modal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Name Analyzer App</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className=''>
        <h5 className='mt-3'>FontEnd</h5>
        <Container>
          <h6 className='text-success'>React</h6>
          <p>
            Used purely functional components with hooks to keep track of local
            state, communicate with global state, and more.
          </p>
          <h6 className='text-success'>Context Api</h6>
          <p>
            Used to keep track of global state. State stores the data received
            from the api (age, gender, and nationality).
          </p>
          <h6 className='text-success'>Bootstrap and custom SCSS</h6>
          <p>Used react-bootstrap and scss for basic styling.</p>
          <h6 className='text-success'>Axios</h6>
          <p>
            Used to make GET requests to an external api to get data about age,
            gender, and nationality based on their first name.
          </p>
        </Container>
      </Modal.Body>
    </>
  );
}
