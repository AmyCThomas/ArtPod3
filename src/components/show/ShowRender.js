import { Row, Card, Col, Container } from "react-bootstrap"

function ShowRender(props) {
  const renderShows = () => {
    return props.shows.map((show) => {
      return (
        <Col className="my-4">
          <Card key={show.id} className="news-card show-card h-100">
            <Card.Body>
            <Card.Title className="show-title d-flex align-items-center justify-content-center">{show && show.name}</Card.Title>
            <Card.Subtitle>Start Time</Card.Subtitle>
            <Card.Text>{show && show.start_time}</Card.Text>
            <Card.Subtitle>End Time</Card.Subtitle>
            <Card.Text>{show && show.end_time}</Card.Text>
            <a href={show && show.url} className="button-17">CLick Here</a>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Container>
      <Row xs={1} md={3}>
        {renderShows()}
      </Row>
    </Container>
  )
}

export default ShowRender;