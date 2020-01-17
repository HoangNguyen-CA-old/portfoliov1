import React, { useState, useEffect } from 'react';
import './Cover.scss';
import posed from 'react-pose';

const Parent = posed.div({
  open: {
    delayChildren: 100,
    staggerChildren: 300
  },
  closed: { delay: 300 },
  after: {}
});
const Name = posed.h1({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut'
    }
  },
  closed: { y: '-100%', opacity: 0 }
});
const Title = posed.h2({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut'
    }
  },
  closed: { y: '-100%', opacity: 0 }
});
const Warn = posed.p({
  open: { y: 0, opacity: 1 },
  closed: { y: '-100%', opacity: 0 }
});

export default function Cover() {
  const [animate, setAnimate] = useState(false);

  let toggleAnimation = () => setAnimate(setAnimate => !setAnimate);

  useEffect(() => {
    setTimeout(toggleAnimation, 700);
  }, []);

  return (
    <div className='cover'>
      <Parent className='' pose={animate ? 'open' : 'closed'}>
        <Name className='text-light display-2'>Hoang Nguyen</Name>
        <Title className='text-light'>Full-Stack Developer</Title>
      </Parent>
    </div>
  );
}
//<Warn className='text-danger'>Site In Development</Warn>
