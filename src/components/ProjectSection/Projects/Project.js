import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import posed from 'react-pose';

const PosedCard = posed(Card)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.0
  }
});
export default function Project({
  title = '',
  image = require('../Images/project1.png'),
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
      <PosedCard
        onPressEnd={handleOpen}
        border='primary'
        className='text-dark bg-lighter-dark project_card'
      >
        <Card.Body className='text-center project_card_body'>
          <div className='my-3'>
            <Card.Title className='text-primary project_title mb-3'>
              {title}
            </Card.Title>
          </div>
        </Card.Body>
      </PosedCard>

      <Modal show={modal} onHide={handleClose} centered>
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
