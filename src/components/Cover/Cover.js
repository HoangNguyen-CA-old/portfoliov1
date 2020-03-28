import React from 'react';
import { Button } from 'react-bootstrap';
import DEV from './web_developer_SVG';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { device, theme } from '../../variables';

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

const Name = styled.h1`
  font-size: 5rem;
  color: ${theme.primary};
  padding-top: 10rem;
  overflow: visible;
  @media ${device.laptop} {
    padding-top: 5rem;
    margin-top: 2rem;
    font-size: 5rem;
    position: absolute;
  }
  z-index: 2;
`;

const Desc = styled.p`
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
  @media ${device.laptop} {
  }
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  position: relative;
  background-color: ${theme.dark};
  padding: 3rem 10%;
  @media ${device.tablet} {
    padding: 3rem 20%;
  }
  @media ${device.laptop} {
    padding: 3rem 10rem 3rem 3rem;
  }
`;

const RightDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.lighterDark};
  display: none;
  @media ${device.laptop} {
    display: block;
    grid-column: 2/3;
    grid-row: 1/3;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

export default function Cover() {
  return (
    <MainContainer fluid={true}>
      <LeftDiv>
        <Name>Hoang Nguyen</Name>
      </LeftDiv>
      <RightDiv>
        <DEV></DEV>
      </RightDiv>
      <BottomDiv>
        <Desc>
          Im a <HighLight>full-stack developer </HighLight>
          based in Toronto, Canada. I'm always looking for new opportunities to
          improve on my existing skill set.
        </Desc>
        <ButtonContainer>
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
