import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../variables';

const MainContainer = styled.div`
  padding: 5em 7em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Header = styled.div`
  font-size: 3rem;
  grid-column: 1/3;
  text-align: center;
  @media ${device.laptop} {
    grid-column: 1/5;
  }
`;
const CardTitle = styled.div`
  font-size: 1.5rem;
`;

const CustomCard = styled(Card)`
  padding: 1rem;
`;

export default function Technologies() {
  return (
    <MainContainer fluid={true} className='bg-dark' id='technology_link'>
      <Header className='text-primary'>Skills</Header>
      <CustomCard>
        <Card.Title className='p-0 m-0'>
          <CardTitle className='text-primary'>Front End</CardTitle>
        </Card.Title>

        <Card.Body className='p-0 m-0'>
          <hr></hr>
          <p>Languages: HTML, CSS/SCSS, Javascript</p>
          <hr></hr>
          <p>React</p>
          <hr></hr>
          <p>Redux & Context API</p>
          <hr></hr>
          <p>Bootstrap</p>
        </Card.Body>
      </CustomCard>
      <CustomCard>
        <Card.Title className='p-0 m-0'>
          <CardTitle className='text-primary'>Back End</CardTitle>
        </Card.Title>

        <Card.Body className='p-0 m-0'>
          <hr></hr>
          <p>Languages: NodeJs, Java</p>
          <hr></hr>
          <p>Express</p>
          <hr></hr>
          <p>Axios</p>
        </Card.Body>
      </CustomCard>
      <CustomCard>
        <Card.Title className='p-0 m-0'>
          <CardTitle className='text-primary'>Database</CardTitle>
        </Card.Title>

        <Card.Body className='p-0 m-0'>
          <hr></hr>
          <p>MongoDB</p>
          <hr></hr>
          <p>Mongoose</p>
        </Card.Body>
      </CustomCard>
      <CustomCard>
        <Card.Title className='p-0 m-0'>
          <CardTitle className='text-primary'>Tools & Deployment</CardTitle>
        </Card.Title>

        <Card.Body className='p-0 m-0'>
          <hr></hr>
          <p>Git</p>
          <hr></hr>
          <p>npm</p>
          <hr></hr>
          <p>Heroku</p>
          <hr></hr>
          <p>Github Pages & Netlify</p>
        </Card.Body>
      </CustomCard>
    </MainContainer>
  );
}
