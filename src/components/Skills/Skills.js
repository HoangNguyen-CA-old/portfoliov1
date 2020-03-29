import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from './localvars';
import { theme } from '../../variables';

const MainContainer = styled.div`
  padding: 3rem 5rem;
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

const Header = styled.div`
  font-size: 3rem;
  grid-column: 1/2;
  text-align: center;
  text-decoration: underline;
  @media ${breakpoints[1]} {
    grid-column: 1/3;
  }
  @media ${breakpoints[2]} {
    grid-column: 1/5;
  }
`;
const CardTitle = styled.div`
  font-size: 1.5rem;
`;

const CustomCard = styled.div`
  background-color: ${theme.secondary};
  padding: 1rem;
  width: 20rem;
  @media ${breakpoints[1]} {
    width: 22rem;
  }
  @media ${breakpoints[2]} {
    width: 13.5rem;
  }
`;

export default function Technologies() {
  return (
    <MainContainer fluid={true} className='bg-dark' id='technology_link'>
      <Header className='text-primary'>Skills</Header>
      <CustomCard>
        <CardTitle>Front End</CardTitle>

        <hr></hr>
        <p>Languages: HTML, CSS/SCSS, Javascript</p>
        <hr></hr>
        <p>React</p>
        <hr></hr>
        <p>Redux & Context API</p>
        <hr></hr>
        <p>Bootstrap</p>
      </CustomCard>
      <CustomCard>
        <CardTitle>Back End</CardTitle>

        <hr></hr>
        <p>Languages: NodeJs, Java</p>
        <hr></hr>
        <p>Express</p>
        <hr></hr>
        <p>Axios</p>
      </CustomCard>
      <CustomCard>
        <CardTitle>Database</CardTitle>

        <hr></hr>
        <p>MongoDB</p>
        <hr></hr>
        <p>Mongoose</p>
      </CustomCard>

      <CustomCard>
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
    </MainContainer>
  );
}
