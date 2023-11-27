import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/near_by_help_logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-light bg-warning">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width=""
              height="50"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
        <Navbar.Brand href="#home">Near<span style={{color:'white'}}> By</span> Help <span style={{color:'white'}}><i class="fa-solid fa-handshake-angle fa-beat"></i></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">profile</Nav.Link>
            <NavDropdown title="JOB" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">job Search</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                seek a job
              </NavDropdown.Item>

              
            </NavDropdown>
            <Nav.Link><Link style={{textDecoration:'none'}} to={'/login'}>Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header