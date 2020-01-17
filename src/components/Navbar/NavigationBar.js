import React from 'react';
import './NavigationBar.scss';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <Navbar expand='sm' className='bg-dark' variant='dark'>
        <NavbarBrand className='lead'>Hoang Nguyen</NavbarBrand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='px-4' href='#about_link'>
              About
            </Nav.Link>
            <Nav.Link className='px-4' href='#project_link'>
              Projects
            </Nav.Link>
            <Nav.Link className='px-4' href='#technology_link'>
              Technologies
            </Nav.Link>
            <Nav.Link className='px-4' href='#contact_link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
