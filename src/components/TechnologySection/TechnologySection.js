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
import ScrollTrigger from 'react-scroll-trigger';
import posed from 'react-pose';

let PosedContainer = posed(Container)({
  open: {
    delayChildren: 0,
    staggerChildren: 300
  },
  closed: { delay: 0 }
});
let Header = posed.h5({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '-10%', opacity: 0 }
});
let Desc = posed.p({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '-10%', opacity: 0 }
});

export default function Technologies() {
  const [rendered, changeRendered] = useState(false);

  let onEnterViewport = () => {
    changeRendered(true);
  };

  let onExitViewport = () => {
    changeRendered(false);
  };

  return (
    <div className='bg-secondary pb-5'>
      <Container fluid={true}>
        <Row className='text-center'>
          <Col xs={12} className='text-center align-content-center pt-5 pb-1'>
            <PosedContainer pose={rendered ? 'open' : 'closed'}>
              <Header className='text-danger technologies_header'>
                Technologies
              </Header>
              <ScrollTrigger
                onEnter={onEnterViewport}
                onExit={onExitViewport}
              ></ScrollTrigger>
              <Desc className='lead text-primary-text'>
                Some of the technologies that I use
              </Desc>
            </PosedContainer>
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
