import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import EpisodesList from './EpisodesList'
import PodcastDetailsCard from './PodcastDetailsCard'
import PodcastsContext from '../../context/PodcastsContext'

const DetailsColumns = ({ podcastId }) => {
  const { podcasts } = useContext(PodcastsContext)
  const foundPodcast = podcasts?.find(singlePodcast => singlePodcast?.id?.attributes['im:id'] === podcastId)

  return (
    <Row>
      {podcasts && foundPodcast && podcastId &&
        <PodcastDetailsCard
          id={foundPodcast?.id?.attributes['im:id']}
          name={foundPodcast['im:name']?.label}
          image={foundPodcast['im:image'][2]?.label}
          author={foundPodcast['im:artist']?.label}
          podcastId={foundPodcast?.id?.attributes['im:id']}
          description={foundPodcast?.summary?.label}
        />
      }
      {location?.pathname?.includes('episode')
        ? <Outlet/>
        : <EpisodesList/>
      }
    </Row>

  )
}

export default DetailsColumns
