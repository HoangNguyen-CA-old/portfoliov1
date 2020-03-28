import React from 'react';
import Project1 from './Projects/Project1Modal';
import Project2 from './Projects/Project2Modal';
import Project from './Project';
import styled from 'styled-components';
import { device } from '../../variables';

const MainContainer = styled.div`
  position: relative;
  padding: 3rem;
  border: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  text-decoration: underline;
  margin-bottom: 2rem;
  grid-column: 1/2;
  text-align: center;
  @media ${device.mobileM} {
    grid-column: 1/3;
  }
  @media ${device.tablet} {
    grid-column: 1/4;
  }
`;

export default function ProjectSection() {
  return (
    <MainContainer fluid={true} id='project_link'>
      <Header className='text-primary'>Projects</Header>

      <Project
        className='bg-primary'
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
    </MainContainer>
  );
}
