import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const PodcastCard = ({ name }) => {
  return (
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
        <li style={{ listStyleType: 'none' }}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </li>
    </Col>

  )
}

export default PodcastCard
