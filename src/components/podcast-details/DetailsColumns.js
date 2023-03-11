import Row from 'react-bootstrap/Row'
import EpisodesList from './EpisodesList'
import PodcastDetailsCard from './PodcastDetailsCard'

const DetailsColumns = ({ episodes }) => {
  return (
    <Row>
      <PodcastDetailsCard/>
      <EpisodesList episodes={episodes}/>
    </Row>

  )
}

export default DetailsColumns
