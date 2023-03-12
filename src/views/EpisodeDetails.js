import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const EpisodeDetails = () => {
  return (
    <Col md={{ span: 8 }} lg={{ span: 8 }}>
      <Card className='mb-4'>
        <Card.Body>
          <h2 style={{ textAlign: 'left' }}>Episode Details</h2>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EpisodeDetails
