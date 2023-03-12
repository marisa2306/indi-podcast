import { Outlet, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import EpisodesList from './EpisodesList'
import PodcastDetailsCard from './PodcastDetailsCard'

const DetailsColumns = ({ episodes, podcastId }) => {
  const location = useLocation()
  return (
    <Row>
      <PodcastDetailsCard/>
      {location?.pathname?.includes('episode')
        ? <Outlet/>
        : <EpisodesList
          podcastId={podcastId}
          episodes={episodes}
        />
    }
    </Row>

  )
}

export default DetailsColumns
