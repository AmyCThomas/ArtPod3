import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBarsStyle.css'
import artlogo from '../images/logo.png';




function NavBar() {
  return (

  

    <div>
      <Navbar className='navbar' variant="dark">
          <Navbar.Collapse>
          <Container>
          
            <Navbar.Brand>
            <div class="py-0 d-inline-block bg-info">ArtPod</div>
            </Navbar.Brand>
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/search">ArtSearch</Nav.Link>
              <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
            </Nav>
          </Container>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar;