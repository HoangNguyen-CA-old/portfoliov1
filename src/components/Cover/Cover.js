import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DeveloperSVG from './web_developer_SVG';

export default function Cover() {
  const [animate, setAnimate] = useState(false);

  let toggleAnimation = () => setAnimate(setAnimate => !setAnimate);

  useEffect(() => {
    setTimeout(toggleAnimation, 700);
  }, []);

  return (
    <Container fluid={true} className='bg-primary-light m-0 p-0' id='cover'>
      <Row className='p-0 m-0 w-100 h-100'>
        <Col xs={12} md={7} className='p-0 m-0 bg-primary-dark cover_col'>
          <div className='bg-lighter-dark' id='cover_left'>
            <p className='text-primary' id='cover_name'>
              Hoang Nguyen
            </p>
            <p className='text-light' id='cover_desc'>
              Im a <span className='text-primary'>full-stack developer </span>
              based in Toronto, Canada.
            </p>
            <div id='cover_button_container'>
              <Button className='mr-4 text-dark'>Projects</Button>
              <Button className='bg-transparent border-secondary text-light'>
                Contact
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={5} className='p-0 m-0 cover_col'>
          <div className='bg-dark' id='cover_right'>
            <DeveloperSVG></DeveloperSVG>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
