import React from 'react';
import './TechnologySection.scss';
import Technology from './Technology/Technology';
import { Container, Row, Col } from 'react-bootstrap';
import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJs,
  faNodeJs,
  faNpm,
  faGit
} from '@fortawesome/free-brands-svg-icons';

export default function Technologies() {
  return (
    <div>
      <Container fluid={true}>
        <Row className='text-center align-content-center'>
          <Col xs={12} className='text-center align-content-center pt-5 pb-3'>
            <h3 className=''>Technologies</h3>
            <p class='lead'>Some of the technologies that I use</p>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faReact} text='React'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faHtml5} text='HTML5'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faCss3} text='CSS3'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faSass} text='SASS'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faBootstrap} text='Bootstrap'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faJs} text='Javascript'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faNodeJs} text='NodeJS'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faNpm} text='npm'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faGit} text='Git'></Technology>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
