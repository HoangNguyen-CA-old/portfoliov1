import React from 'react';
import { Modal } from 'react-bootstrap';
import { ProjectImage, Wrapper } from './Styles';
export default function Project2Modal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className='text-dark'>
          <h3>Shopping List App</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          An app made using the MERN stack. It is a shopping list that requires
          user authentication to delete and add items.
        </p>
        <Wrapper>
          <ProjectImage
            src={require('../Images/shop.png')}
            alt='project ui'
          ></ProjectImage>
        </Wrapper>
      </Modal.Body>
    </>
  );
}
