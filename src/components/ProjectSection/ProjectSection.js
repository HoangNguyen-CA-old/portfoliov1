import React, { useState } from 'react';
import './ProjectSection.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project/Project';
import ScrollTrigger from 'react-scroll-trigger';
import posed from 'react-pose';

let PosedContainer = posed(Container)({
  open: {
    delayChildren: 0,
    staggerChildren: 300
  },
  closed: { delay: 0 }
});
let Header = posed.h4({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '5%', opacity: 0 }
});
let Desc = posed.p({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '5%', opacity: 0 }
});

export default function ProjectSection() {
  const [rendered, changeRendered] = useState(false);

  let onEnterViewport = () => {
    changeRendered(true);
  };

  let onExitViewport = () => {
    changeRendered(false);
  };

  return (
    <Container fluid={true} className='bg-dark projects_container'>
      <Row>
        <Col xs={12} className='text-center pt-5 pb-3'>
          <PosedContainer pose={rendered ? 'open' : 'closed'}>
            <Header className='text-success projects_header'>Projects</Header>
            <ScrollTrigger
              onEnter={onEnterViewport}
              onExit={onExitViewport}
            ></ScrollTrigger>
            <Desc className='lead'>
              Here are a few projects that I have worked on in the past
            </Desc>
          </PosedContainer>
        </Col>
        <Col xs={6} md={4}>
          <Project />
        </Col>
        <Col xs={6} md={4}>
          <Project />
        </Col>
        <Col xs={6} md={4}>
          <Project />
        </Col>
      </Row>
    </Container>
  );
}
