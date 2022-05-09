import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBarsStyle.css'
// import artlogo from '../images/artlogo.svg';

// Coming back later to add toggle for responsiveness

function NavBar() {
  return (
    <div>
      <Navbar className='navbar' variant="dark">
          <Navbar.Collapse>
          <Container>
            <Navbar.Brand>
              {/* <img
                alt=""
                src={artlogo}
                width="100"
                height="100"
                className="d-inline-block center"
              />{' '} */}

            </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
              <Nav.Link as={Link} to="/members">Members</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
              <Nav.Link as={Link} to="/shows">Shows</Nav.Link>
              <Nav.Link as={Link} to="/compiler">Compiler</Nav.Link>
            </Nav>
          </Container>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;