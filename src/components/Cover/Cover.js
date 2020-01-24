import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DeveloperSVG from './web_developer_SVG';
import { Link } from 'react-scroll';

export default function Cover() {
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
              <Link
                to='project_link'
                spy={false}
                smooth={true}
                duration={600}
                className='smooth_scroll_link'
              >
                <Button className='mr-4 text-dark'>Projects</Button>
              </Link>

              <Link
                to='contact_link'
                spy={false}
                smooth={true}
                duration={600}
                className='smooth_scroll_link'
              >
                <Button className='bg-transparent border-secondary text-light'>
                  Contact
                </Button>
              </Link>
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
