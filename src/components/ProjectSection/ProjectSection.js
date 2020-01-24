import React from 'react';
import Project1 from './Projects/Project1Modal';
import Project2 from './Projects/Project2Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Projects/Project';

export default function ProjectSection() {
  return (
    <Container fluid={true} className='bg-light' id='project_link'>
      <div id='layer' className='bg-light'></div>
      <Row className='p-0 m-0 text-center'>
        <Col xs={12} className='mb-5'>
          <p className='text-primary' id='projects_header'>
            Projects
          </p>

          <p className='lead text-lighter-dark' id='projects_desc'>
            Here are a few projects that I have worked on in the past
          </p>
          <hr></hr>
        </Col>
        <Col xs={6} md={4} className='p-0 m-0 d-flex justify-content-center'>
          <Project
            title='Shopping List App'
            tech={['React', 'Express', 'Redux', 'MongoDB']}
            modalContent={<Project2></Project2>}
            codeLink='https://github.com/HoangNguyen-CA/shopping_list/'
            demoLink='https://fierce-bayou-18494.herokuapp.com/'
          ></Project>
        </Col>
        <Col xs={6} md={4} className='p-0 m-0 d-flex justify-content-center'>
          <Project
            title='Name Analyzer App'
            modalContent={<Project1></Project1>}
            tech={['React', 'Axios', 'Bootstrap', 'Context API']}
            codeLink='https://github.com/HoangNguyen-CA/name-analyzer'
            demoLink='https://hoangnguyen-ca.github.io/name-analyzer/'
          ></Project>
        </Col>
      </Row>
    </Container>
  );
}
