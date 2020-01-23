import React, { useState } from 'react';
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
  const [rendered, changeRendered] = useState(false);

  return (
    <div className='bg-dark pb-5' id='technology_link'>
      <Container fluid={true}>
        <Row className='text-center'>
          <Col xs={12} className='text-center align-content-center pt-5 pb-1'>
            <div>
              <p className='text-danger technologies_header'>Technologies</p>

              <p className='lead text-primary-text'>
                Technologies I am familiar with
              </p>
            </div>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology
              icon={faReact}
              text='React'
              color='#61DBFB'
            ></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology
              icon={faHtml5}
              text='HTML5'
              color='#E44D26'
            ></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faCss3} text='CSS3' color='#2965f1'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faSass} text='SASS' color='#CD6799'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology
              icon={faBootstrap}
              text='Bootstrap'
              color='#602C50'
            ></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology
              icon={faJs}
              text='Javascript'
              color='#F0DB4F'
            ></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology
              icon={faNodeJs}
              text='NodeJS'
              color='#3C873A'
            ></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faNpm} text='npm' color='#CC3534'></Technology>
          </Col>
          <Col xs={6} sm={4} lg={3}>
            <Technology icon={faGit} text='Git' color='#F1502F'></Technology>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
