import './HomePageStyle.css'
import {Container, Button, CardGroup, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header>
        <Container as="section" className="header-div" fluid>
          <div className="header-items">
            <div className='text-div'>
              <h1 className="header-text">Enjoy Our Collection!.</h1>
            </div>
            <Link to="/signup"><Button variant="outline-light" size="lg" className="header-btn">Signup</Button></Link>
          </div>
        </Container>
      </header>

      <Container as="section" className="feature-div mt-5 mb-5 p-5" fluid>
        <h1 className="feature-title">How It Works</h1>
        <CardGroup as={Row} className="justify-content-md-center" sm='auto' md='auto' lg='auto'>
          <Card className="m-5 border-0">
            {/* <Card.Img variant="top" src={require("../../images/Page1.png")}/> */}
            <Card.Body>
              <Card.Title>Sign up</Card.Title>
              <Card.Text>
                Register!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5 border-0">
            {/* <Card.Img variant="top" src={require("../../images/Page2.png")}/> */}
            <Card.Body>
              <Card.Title>Register here:</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5 border-0">
            {/* <Card.Img variant="top" src={require("../../images/Page3.png")}/> */}
            <Card.Body>
              <Card.Title>Find or Share in our ArtPod Forum!</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-5 border-0">
            {/* <Card.Img variant="top" src={require("../../images/Page4.png")}/> */}
            <Card.Body>
              <Card.Title>Art Show</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default HomePage;
