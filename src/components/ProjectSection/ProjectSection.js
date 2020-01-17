import React, { useState } from 'react';
import './ProjectSection.scss';
import Project1 from './Projects/Project1Modal';
import Project2 from './Projects/Project2Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Projects/Project';
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
  closed: { x: '-5%', opacity: 0 }
});

let Desc = posed.p({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '-5%', opacity: 0 }
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
    <Container
      fluid={true}
      className='bg-dark projects_container'
      id='project_link'
    >
      <Row>
        <Col xs={12} className='text-center pt-5 pb-4'>
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
          <Project
            title='Shopping List App'
            desc='full-stack CRUD app that requires user authentication to modify a shopping list '
            image={require('./Images/shop.png')}
            modalContent={<Project2></Project2>}
            codeLink='https://github.com/HoangNguyen-CA/shopping_list/'
            demoLink='https://fierce-bayou-18494.herokuapp.com/'
          ></Project>
        </Col>
        <Col xs={6} md={4}>
          <Project
            title='Name Analyzer App'
            desc="Simple app that fetches data about a person's name from and external api"
            image={require('./Images/name-analyzer1.png')}
            modalContent={<Project1></Project1>}
            codeLink='https://github.com/HoangNguyen-CA/name-analyzer'
            demoLink='https://hoangnguyen-ca.github.io/name-analyzer/'
          ></Project>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
    </Container>
  );
}
