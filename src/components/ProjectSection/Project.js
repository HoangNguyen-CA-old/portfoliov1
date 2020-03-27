import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import uuid from 'uuid';

export default function Project({
  title = '',
  tech = [],
  modalContent = <></>,
  codeLink = '',
  demoLink = ''
}) {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Card
        onPressEnd={handleOpen}
        border='primary'
        className='text-dark project_card bg-dark'
      >
        <Card.Body className='text-center project_card_body'>
          <div className='my-3'>
            <Card.Title className='text-primary project_title mb-3'>
              {title}
            </Card.Title>
            {tech.map(tec => (
              <div key={uuid()}>
                <hr className='bg-light'></hr>
                <p className='text-light'>{tec}</p>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={modal}
        onHide={handleClose}
        centered
        className='project_modal'
        size='lg'
      >
        {modalContent}
        <Modal.Footer>
          <Button size='md' target='_blank' href={codeLink}>
            Code
          </Button>
          <Button
            size='md'
            href={demoLink}
            target='_blank'
            className='mr-auto ml-2'
          >
            Demo
          </Button>
          <Button size='md' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
