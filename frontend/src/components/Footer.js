import { Row, Col } from "react-bootstrap"
import './NavBarsStyle.css'

function Footer() {
  return (
    <footer>
      <Row className="footer-div">
        <Col xs={6} >
          <p className="footer-text">© Art Pod, Copyright 2022</p>
        </Col>

      </Row>
    </footer>
  )
}

export default Footer;