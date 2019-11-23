import React from 'react';
import './ProjectSection.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project/Project';

export default function ProjectSection() {
  return (
    <div>
      <Container fluid={true} className='bg-dark'>
        <Row>
          <Col xs={12} className='text-center align-content-center pt-5 pb-3'>
            <h4 className='text-light'>Projects</h4>
            <p>Here are a few projects that I have worked on in the past</p>
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
          <Col xs={6} lg={4}>
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
