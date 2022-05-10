import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav, Col, Button } from 'react-bootstrap';
import ArtPodAPI from "../api/ArtPodAPI"
import './NavBarsStyle.css'

function Login(props) {
  const navigate = useNavigate()

  // helpers
  const logMeOut = async () => {
    const data = await ArtPodAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }

  // render
  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <div>
            <Navbar className="login-bar" variant="light">
              <Navbar.Brand as={Col} xs={8}>
                {/* <img alt="logo" src={require("../images/logo.png")} className="logo"/> */}
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login"><Button variant="outline-secondary">Login</Button></Nav.Link>
                <Nav.Link as={Link} to="/signup"><Button variant="outline-secondary">Sign Up</Button></Nav.Link>

              </Nav>
            </Navbar>
        </div>
      )
    }
    return (
      <div>
        <Navbar className="login-bar">
          <Navbar.Brand as={Col} xs={8}>
            {/* <img alt="logo" src={require("../images/artlogo.png")} className="logo"/> */}
              </Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="#" onClick={logMeOut}><Button variant="outline-secondary">Logout</Button></Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }

  return (
    <div>
      { renderAuthItems() }
    </div>
  )

}

export default Login