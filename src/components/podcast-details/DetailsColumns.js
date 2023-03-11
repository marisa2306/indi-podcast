import Row from 'react-bootstrap/Row'
import EpisodesList from './EpisodesList'
import PodcastDetailsCard from './PodcastDetailsCard'

const DetailsColumns = ({ episodes, podcastId }) => {
  return (
    <Row>
      <PodcastDetailsCard/>
      <EpisodesList
        podcastId={podcastId}
        episodes={episodes}
      />
    </Row>

  )
}

export default DetailsColumns
