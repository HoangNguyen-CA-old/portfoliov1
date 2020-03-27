import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const ScrollLink = styled(Link)`
  opacity: 1;
`;

export default function Navigationbar() {
  return (
    <Navbar
      expand='sm'
      className='bg-primary-light py-0'
      id='sticky_navbar'
      sticky='top'
    >
      <NavbarBrand className='lead text-dark'>Hoang Nguyen</NavbarBrand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav text-dark'>
        <Nav className='ml-auto'>
          <ScrollLink
            to='project_link'
            spy={true}
            smooth={true}
            duration={600}
            className='smooth_scroll_link nav-link'
            href=''
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to='technology_link'
            spy={true}
            smooth={true}
            duration={600}
            className='smooth_scroll_link nav-link'
            href=''
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to='contact_link'
            spy={true}
            smooth={true}
            duration={600}
            className='nav-link'
            href=''
          >
            Contact
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
