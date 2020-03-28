import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'uuid';
import styled from 'styled-components';
import { theme } from '../../variables';
import { motion } from 'framer-motion';
import { breakpoint1, breakpoint2 } from './localvars';

const CustomCard = styled(motion.div)`
  background-color: ${theme.dark};
  padding: 1rem;
  width: 20rem;
  border: 2px solid ${theme.darkerDark};
  @media ${breakpoint1} {
  }
  @media ${breakpoint2} {
    width: 18rem;
  }
`;
const Title = styled.h3`
  font-size: 1.3rem;
`;

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
      <CustomCard
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='my-3'>
          <Title className='text-primary mb-3'>{title}</Title>
          {tech.map(tec => (
            <div key={uuid()}>
              <hr className='bg-light'></hr>
              <p className='text-light'>{tec}</p>
            </div>
          ))}
        </div>
      </CustomCard>

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
