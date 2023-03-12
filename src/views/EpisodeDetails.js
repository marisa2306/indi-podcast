import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import EpisodesContext from '../context/EpisodesContext'

const EpisodeDetails = () => {
  const { episodes } = useContext(EpisodesContext)
  const params = useParams()
  const foundEpisode = episodes.find(singleEpisode => singleEpisode?.trackId === parseInt(params?.episodeId))
  return (
    <Col md={{ span: 8 }} lg={{ span: 8 }}>
      <Card className='mb-4'>
        <Card.Body>
          <h2 style={{ textAlign: 'left', fontSize: '2em' }}>{foundEpisode?.trackName}</h2>
          <p>{foundEpisode?.shortDescription}</p>
          <audio controlsList='nodownload' controls>
            <source src={foundEpisode?.previewUrl} type='audio/mpeg'/>
          </audio>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EpisodeDetails
