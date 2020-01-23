import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <Navbar expand='sm' className='bg-primary-light'>
        <NavbarBrand className='lead text-dark'>Hoang Nguyen</NavbarBrand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='px-4 text-dark' href='#project_link'>
              Projects
            </Nav.Link>
            <Nav.Link className='px-4 text-dark' href='#technology_link'>
              Technologies
            </Nav.Link>
            <Nav.Link className='px-4 text-dark' href='#contact_link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
