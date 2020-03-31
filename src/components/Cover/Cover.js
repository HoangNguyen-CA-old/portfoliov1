import React from 'react';
import { Button } from 'react-bootstrap';
import DEV from './web_developer_SVG';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { device, theme } from '../../variables';
import { breakpoints } from './localvars';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  min-height: 500px;

  height: 100vh;
  overflow: hidden;
  text-align: center;
  grid-template-rows: 30% 70%;
  max-height: 500px;
  @media ${device.laptop} {
    text-align: start;
    grid-template-columns: 60% 40%;
    grid-template-rows: 30% 70%;
    min-height: 600px;
    max-height: 750px;
  }
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  color: ${theme.lighterPrimary};
  overflow: visible;
  z-index: 2;
  margin-top: 12rem;

  @media ${breakpoints[2]} {
    margin-top: 5rem;
    position: absolute;
  }
  @media ${breakpoints[3]} {
    margin-top: 10rem;
  }
`;

const Desc = styled(motion.p)`
  font-size: 1.5rem;
  color: ${theme.secondary};
`;

const HighLight = styled.span`
  color: ${theme.primary};
  font-size: inherit;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem;

  overflow: visible;
  z-index: 5;

  background-color: ${theme.dark};
  grid-row: 1/2;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  position: relative;
  background-color: ${theme.darkerDark};
  padding: 3rem 10%;
  @media ${breakpoints[1]} {
    padding: 3rem 20%;
  }
  @media ${breakpoints[2]} {
    padding: 3rem 10rem 3rem 4rem;
  }
`;

const RightDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.lighterDark};
  display: none;
  @media ${breakpoints[2]} {
    display: block;
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;

const ButtonContainer = styled(motion.div)`
  margin-top: 1rem;
`;

const animation = { opacity: 1, x: 0 };

const transition = { duration: 0.7, delay: 0.3 };

const initial = { opacity: 0, x: -5 };

export default function Cover() {
  return (
    <MainContainer fluid={true}>
      <LeftDiv>
        <Name animate={animation} initial={initial} transition={transition}>
          Hoang Nguyen
        </Name>
      </LeftDiv>
      <RightDiv>
        <DEV></DEV>
      </RightDiv>
      <BottomDiv>
        <Desc animate={animation} initial={initial} transition={transition}>
          I am a <HighLight>full-stack developer </HighLight>
          based in Toronto, Canada. I'm always looking for new opportunities to
          improve on my existing skill set.
        </Desc>
        <ButtonContainer
          animate={animation}
          initial={initial}
          transition={transition}
        >
          <Link
            to='project_link'
            spy={false}
            smooth={true}
            duration={600}
            className='smooth_scroll_link'
          >
            <Button className='mr-4 text-dark'>Projects</Button>
          </Link>

          <Link to='contact_link' spy={false} smooth={true} duration={600}>
            <Button className='bg-transparent border-secondary text-light'>
              Contact
            </Button>
          </Link>
        </ButtonContainer>
      </BottomDiv>
    </MainContainer>
  );
}
