import { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import EpisodesTable from './EpisodesTable'
import EpisodesContext from '../../context/EpisodesContext'

const EpisodesList = () => {
  const { episodes } = useContext(EpisodesContext)
  return (
    <Col md={{ span: 8 }} lg={{ span: 8 }}>
      <Card className='mb-4'>
        <Card.Body>
          <h2 style={{ textAlign: 'left' }}>Episodes: {episodes?.length}</h2>
        </Card.Body>
      </Card>
      <EpisodesTable episodes={episodes}/>
    </Col>
  )
}

export default EpisodesList
