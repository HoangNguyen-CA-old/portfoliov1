import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 5em 7em;
`;

const Header = styled.div`
  font-size: 2rem;
`;
const CardTitle = styled.div`
  font-size: 1.5rem;
`;

export default function Technologies() {
  return (
    <MainContainer fluid={true} className='bg-dark' id='technology_link'>
      <Row className='text-center'>
        <Col xs={12}>
          <Header className='text-primary'>Skills</Header>
          <hr className='mb-3 bg-light'></hr>
        </Col>
        <Col xs={12} sm={6} lg={3} className='my-3'>
          <Card className='p-3'>
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
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3} className='my-3'>
          <Card className='p-3'>
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
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3} className='my-3'>
          <Card className='p-3'>
            <Card.Title className='p-0 m-0'>
              <CardTitle className='text-primary'>Database</CardTitle>
            </Card.Title>

            <Card.Body className='p-0 m-0'>
              <hr></hr>
              <p>MongoDB</p>
              <hr></hr>
              <p>Mongoose</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3} className='my-3'>
          <Card className='p-3'>
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
          </Card>
        </Col>
      </Row>
    </MainContainer>
  );
}
