import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from './localvars';
import { theme } from '../../variables';
import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';

const MainContainer = styled(motion.div)`
  background-color: ${theme.dark};
  padding: 5rem 5rem;
`;

const Header = styled(motion.h1)`
  opacity: 0;
  color: ${theme.lighterPrimary};
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
  margin-bottom: 3rem;
  @media ${breakpoints[1]} {
  }
  @media ${breakpoints[2]} {
  }
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
`;

const SkillsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  justify-content: center;
  align-content: center;
  @media ${breakpoints[1]} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints[2]} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CustomCard = styled(motion.div)`
  opacity: 0;
  background-color: ${theme.secondary};
  padding: 1rem;
  width: 20rem;
  border: 2px solid ${theme.darkerSecondary};
  @media ${breakpoints[1]} {
    width: 22rem;
  }
  @media ${breakpoints[2]} {
    width: 13.5rem;
  }
`;

const headerVariant = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
};

const skillsVariant = {
  open: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
};

const skillVariant = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
};

export default function Technologies() {
  const [isOpen, setOpen] = useState(false);

  const handleAnimate = () => {
    setOpen(true);
  };

  return (
    <MainContainer
      inital={false}
      animate={isOpen ? 'open' : 'closed'}
      id='technology_link'
    >
      <Header variants={headerVariant}>Skills</Header>
      <ScrollTrigger onEnter={handleAnimate}></ScrollTrigger>
      <SkillsWrapper variants={skillsVariant}>
        <CustomCard variants={skillVariant}>
          <CardTitle>Front End</CardTitle>
          <hr></hr>
          <p>Languages: HTML, CSS/SCSS, Javascript/Typescript</p>
          <hr></hr>
          <p>React</p>
          <hr></hr>
          <p>Redux & Context API</p>
          <hr></hr>
          <p>Bootstrap</p>
        </CustomCard>
        <CustomCard variants={skillVariant}>
          <CardTitle>Back End</CardTitle>

          <hr></hr>
          <p>Languages: NodeJs, Java</p>
          <hr></hr>
          <p>Express</p>
          <hr></hr>
          <p>Axios</p>
        </CustomCard>
        <CustomCard variants={skillVariant}>
          <CardTitle>Database</CardTitle>

          <hr></hr>
          <p>MongoDB</p>
          <hr></hr>
          <p>Mongoose</p>
        </CustomCard>
        <CustomCard variants={skillVariant}>
          <CardTitle>Tools & Deployment</CardTitle>

          <hr></hr>
          <p>Git</p>
          <hr></hr>
          <p>npm</p>
          <hr></hr>
          <p>Heroku</p>
          <hr></hr>
          <p>Github Pages & Netlify</p>
        </CustomCard>
      </SkillsWrapper>
    </MainContainer>
  );
}
