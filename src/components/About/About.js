import React, { useState } from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';
import posed from 'react-pose';
import ScrollTrigger from 'react-scroll-trigger';

let PosedContainer = posed(Container)({
  open: {
    delayChildren: 0,
    staggerChildren: 300
  },
  closed: { delay: 0 }
});

let Header = posed.h3({
  open: {
    x: 0,
    opacity: 1,
    applyAtStart: { opacity: 0 },
    transition: {}
  },
  closed: { x: '-10%', opacity: 0 }
});
let Desc = posed.p({
  open: {
    x: 0,
    opacity: 1,
    applyAtStart: { opacity: 0 },
    transition: {}
  },
  closed: { x: '-10%', opacity: 0 }
});

export default function About() {
  const [rendered, changeRendered] = useState(false);

  let onEnterViewport = () => {
    changeRendered(true);
  };

  let onExitViewport = () => {
    changeRendered(false);
  };

  return (
    <div className='about_section bg-secondary' id='about_link'>
      <PosedContainer
        pose={rendered ? 'open' : 'closed'}
        fluid={true}
        className='text-center about_container'
      >
        <Header className='text-warning about_header'>About Me</Header>
        <ScrollTrigger
          onEnter={onEnterViewport}
          onExit={onExitViewport}
        ></ScrollTrigger>
        <Desc className='about_desc'>
          I'm a web developer based in Toronto, Canada.
        </Desc>
      </PosedContainer>
    </div>
  );
}

/*
<Container>
        <Row className='text-center'>
          <Col xs={12} sm={6} md={4}>
            <FontAwesomeIcon icon={faSchool} className='about_icon' />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <FontAwesomeIcon icon={faSearch} className='about_icon' />
          </Col>
          <Col xs={12} md={4} className='about_icon'>
            Wo
          </Col>
        </Row>
      </Container>
*/
