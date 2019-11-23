import React from 'react';
import './NavigationBar.scss';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' className='justify-content-between'>
        <NavbarBrand>Hoang Nguyen</NavbarBrand>
        <Nav className='justify-content-end nav_links'>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Technologies</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
