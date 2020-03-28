import React from 'react';
import { Modal } from 'react-bootstrap';
import { ProjectImage } from './Styles';
//Nested inside a Modal
export default function Project1Modal() {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className='text-dark'>
          <h3>Name Analyzer App</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className=''>
        <p className='project_desc'>
          An app that fetches data from an third-party API. It reveals people's
          information (age, gender, nationality) based on their first name.
        </p>
      </Modal.Body>
      <ProjectImage
        src={require('../Images/name-analyzer1.png')}
        alt='project ui'
      ></ProjectImage>
    </>
  );
}
