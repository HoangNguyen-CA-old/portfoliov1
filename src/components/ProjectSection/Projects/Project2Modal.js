import React from 'react';
import { Modal } from 'react-bootstrap';

export default function Project2Modal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className='text-dark'>
          <h3>Shopping List App</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className=''>
        <p className='project_desc'>
          An app made using the MERN stack. It is a shopping list that requires
          user authentication to delete and add items.
        </p>
      </Modal.Body>
      <img src={require('../Images/shop.png')} alt='project ui'></img>
    </>
  );
}
