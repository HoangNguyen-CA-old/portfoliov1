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
            spy={false}
            smooth={true}
            duration={600}
            className='smooth_scroll_link'
          >
            <Nav.Link className='px-4'>Projects</Nav.Link>
          </Link>
          <Link
            to='technology_link'
            smooth={true}
            duration={600}
            className='smooth_scroll_link'
          >
            <Nav.Link className='px-4'>Skills</Nav.Link>
          </Link>

          <Link
            to='contact_link'
            spy={false}
            smooth={true}
            duration={600}
            className='smooth_scroll_link'
          >
            <Nav.Link className='px-4'>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
