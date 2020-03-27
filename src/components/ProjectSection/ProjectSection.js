import React from 'react';
import Project1 from './Projects/Project1Modal';
import Project2 from './Projects/Project2Modal';
import { Row, Col } from 'react-bootstrap';
import Project from './Project';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 2rem 2rem;
  border: 0;
`;

const Header = styled.h1`
  font-size: 2rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`;

export default function ProjectSection() {
  return (
    <Container fluid={true} className='bg-light' id='project_link'>
      <Row className='p-0 m-0 text-center'>
        <Col xs={12}>
          <Header className='text-primary'>Projects</Header>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={4}
          className='p-0 m-0 d-flex justify-content-center'
        >
          <Project
            className='bg-primary'
            title='Shopping List App'
            tech={['React', 'Express', 'Redux', 'MongoDB']}
            modalContent={<Project2></Project2>}
            codeLink='https://github.com/HoangNguyen-CA/shopping_list/'
            demoLink='https://fierce-bayou-18494.herokuapp.com/'
          ></Project>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={4}
          className='p-0 m-0 d-flex justify-content-center'
        >
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
