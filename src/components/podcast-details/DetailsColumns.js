import { Outlet, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import EpisodesList from './EpisodesList'
import PodcastDetailsCard from './PodcastDetailsCard'
import useGetPodcast from '../hooks/useGetPodcast'

const DetailsColumns = ({ episodes, podcastId }) => {
  const location = useLocation()
  const { podcast } = useGetPodcast(location)

  return (
    <Row>
      <PodcastDetailsCard
        {...podcast}
        podcastId={podcastId}
      />
      {location?.pathname?.includes('episode')
        ? <Outlet/>
        : <EpisodesList
            episodes={episodes}
        />
    }
    </Row>

  )
}

export default DetailsColumns
