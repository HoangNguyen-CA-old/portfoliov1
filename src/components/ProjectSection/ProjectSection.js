import React from 'react';
import './ProjectSection.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project/Project';

export default function ProjectSection() {
  return (
    <div>
      <Container fluid={true} className='bg-dark projects_container'>
        <Row>
          <Col xs={12} className='text-center align-content-center pt-5 pb-3'>
            <h4 className='text-light'>Projects</h4>
            <p>Here are a few projects that I have worked on in the past</p>
          </Col>
          <Col xs={6} md={4} xl={3}>
            <Project />
          </Col>
          <Col xs={6} md={4} xl={3}>
            <Project />
          </Col>
          <Col xs={6} md={4} xl={3}>
            <Project />
          </Col>
          <Col xs={6} md={4} xl={3}>
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
