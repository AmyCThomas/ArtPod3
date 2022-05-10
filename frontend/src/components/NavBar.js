import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBarsStyle.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
// import artlogo from '../images/artlogo.svg';

// Coming back later to add toggle for responsiveness

function NavBar() {
  return (
    <div>
      <Navbar className='navbar' variant="dark">
          <Navbar.Collapse>
          <Container>
            <Navbar.Brand>
            
            </Navbar.Brand>
            <Nav className="justify-content-center">
            <div className="d-flex flex-row justify-content-between border-bottom">
            <NavLink to="/" activeclassname="active-link "><h1 className="arrow mx-5">{'<'}</h1></NavLink>
            <p className="col-6 mt-3">View Works In Our Collection</p>
            <span className="mic"><i className="fa fa-microphone mt-3" aria-hidden="true" /></span>
            <span><i className="fa fa-cog mx-5 mt-3" aria-hidden="true" /></span>
            </div>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/search">ArtSearch</Nav.Link>
              <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
              <Nav.Link as={Link} to="/members">Members</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
              <Nav.Link as={Link} to="/shows">Shows</Nav.Link>
            </Nav>
          </Container>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar;