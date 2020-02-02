import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Technologies() {
  return (
    <Container fluid={true} className='bg-dark' id='technology_link'>
      <Row className='text-center'>
        <Col xs={12}>
          <p id='technologies_header' className='text-primary'>
            Skills
          </p>
          <hr className='mb-3 bg-light'></hr>
        </Col>
        <Col xs={12} sm={6} lg={3} className='my-3'>
          <Card className='p-3'>
            <Card.Title className='p-0 m-0'>
              <p className='technology_card_title text-primary'>Front End</p>
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
              <p className='technology_card_title text-primary'>Back End</p>
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
              <p className='technology_card_title text-primary'>Database</p>
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
              <p className='technology_card_title text-primary'>
                Tools & Deployment
              </p>
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
    </Container>
  );
}
