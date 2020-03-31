import React, { useState } from 'react';
import Project1 from './Projects/Project1Modal';
import Project2 from './Projects/Project2Modal';
import Project from './Project';
import styled from 'styled-components';
import { theme } from '../../variables';
import { breakpoints } from './localvars';
import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';

const MainContainer = styled(motion.div)`
  overflow: hidden;
  position: relative;
  padding: 4rem 6rem;
`;

const Header = styled(motion.h1)`
  color: ${theme.darkerPrimary};
  font-size: 3rem;
  text-decoration: underline;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-content: center;

  @media ${breakpoints[1]} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints[2]} {
    grid-template-columns: 1fr 1fr 1fr;
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

const projectsVariant = {
  open: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
};

const initial = { opacity: 0 };

const headerTransition = { delay: 0.2 };

export default function ProjectSection() {
  const [isOpen, setOpen] = useState(false);

  const handleAnimate = () => {
    setOpen(true);
  };
  return (
    <MainContainer
      inital={false}
      animate={isOpen ? 'open' : 'closed'}
      id='project_link'
    >
      <Header
        variants={headerVariant}
        initial={initial}
        transition={headerTransition}
      >
        Projects
      </Header>
      <ScrollTrigger onEnter={handleAnimate}></ScrollTrigger>

      <ProjectsWrapper variants={projectsVariant}>
        <Project
          title='Shopping List App'
          tech={['React', 'Express', 'Redux', 'MongoDB']}
          modalContent={<Project2></Project2>}
          codeLink='https://github.com/HoangNguyen-CA/shopping_list/'
          demoLink='https://fierce-bayou-18494.herokuapp.com/'
        ></Project>

        <Project
          title='Name Analyzer App'
          modalContent={<Project1></Project1>}
          tech={['React', 'Axios', 'Bootstrap', 'Context API']}
          codeLink='https://github.com/HoangNguyen-CA/name-analyzer'
          demoLink='https://hoangnguyen-ca.github.io/name-analyzer/'
        ></Project>
        <Project
          title='Name Analyzer App'
          modalContent={<Project1></Project1>}
          tech={['React', 'Axios', 'Bootstrap', 'Context API']}
          codeLink='https://github.com/HoangNguyen-CA/name-analyzer'
          demoLink='https://hoangnguyen-ca.github.io/name-analyzer/'
        ></Project>
      </ProjectsWrapper>
      <ScrollTrigger onEnter={handleAnimate}></ScrollTrigger>
    </MainContainer>
  );
}
