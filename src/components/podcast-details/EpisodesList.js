import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import EpisodesTable from './EpisodesTable'

const EpisodesList = ({ episodes }) => {
  return (
    <Col md={{ span: 8 }} lg={{ span: 8 }}>
      <Card className='mb-4'>
        <Card.Body>
          <h2 style={{ textAlign: 'left' }}>Episodes: {episodes?.length}</h2>
        </Card.Body>
      </Card>
      <EpisodesTable
        episodes={episodes}/>
    </Col>
  )
}

export default EpisodesList
