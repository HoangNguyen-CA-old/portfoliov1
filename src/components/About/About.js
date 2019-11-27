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
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
  closed: { x: '-10%', opacity: 0 }
});
let Desc = posed.p({
  open: { x: 0, opacity: 1, applyAtStart: { opacity: 0 } },
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
    <PosedContainer
      pose={rendered ? 'open' : 'closed'}
      fluid={true}
      className='text-center bg-secondary about_section'
    >
      <Header className='text-warning about_header'>About Me</Header>
      <ScrollTrigger
        onEnter={onEnterViewport}
        onExit={onExitViewport}
      ></ScrollTrigger>
      <Desc className='about_desc'>
        I'm a web developer based in Toronto, Canada.
        <br></br>
      </Desc>
    </PosedContainer>
  );
}
