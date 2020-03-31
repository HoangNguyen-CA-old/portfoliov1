import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'uuid';
import styled from 'styled-components';
import { theme } from '../../variables';
import { motion } from 'framer-motion';
import { breakpoints } from './localvars';

const CustomCard = styled(motion.div)`
  background-color: ${theme.dark};
  padding: 2rem 1rem 1rem 1rem;
  width: 20rem;
  border: 2px solid ${theme.darkerDark};
  @media ${breakpoints[1]} {
  }
  @media ${breakpoints[2]} {
    width: 18rem;
  }
`;
const Title = styled.h3`
  font-size: 1.3rem;
  color: ${theme.primary};
`;

const CardText = styled.p`
  color: ${theme.secondary};
`;
const Divider = styled.hr`
  background-color: ${theme.secondary};
  height: 0.02rem;
  padding: 0;
`;

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};
const initial = { opacity: 0 };

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
        whileTap={{ scale: 1 }}
        variants={variants}
        initial={initial}
      >
        <Title>{title}</Title>
        {tech.map(text => (
          <div key={uuid()}>
            <Divider></Divider>
            <CardText>{text}</CardText>
          </div>
        ))}
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
