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
  desc = '',
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
        className='text-dark bg-light m-2 project_card'
      >
        <Card.Body className='text-center p-2'>
          <Card.Img
            src={image}
            alt='Picture'
            style={{ height: '60%' }}
            className='border border-primary p-1 project_img bg-dark'
          />
          <div
            style={{
              height: '40%'
            }}
            className='vertical_center'
          >
            <Card.Title className='text-success project_title'>
              {title}
            </Card.Title>
            <Card.Subtitle className='project_desc'>{desc}</Card.Subtitle>
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
