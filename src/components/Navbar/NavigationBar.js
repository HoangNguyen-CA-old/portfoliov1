import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

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
          <Link
            to='project_link'
            spy={true}
            smooth={true}
            duration={600}
            className='smooth_scroll_link nav-link'
            href=''
          >
            Projects
          </Link>
          <Link
            to='technology_link'
            spy={true}
            smooth={true}
            duration={600}
            className='smooth_scroll_link nav-link'
            href=''
          >
            Skills
          </Link>
          <Link
            to='contact_link'
            spy={true}
            smooth={true}
            duration={600}
            className='smooth_scroll_link nav-link'
            href=''
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
