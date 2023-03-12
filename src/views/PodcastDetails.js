import { useParams } from 'react-router'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import DetailsColumns from '../components/podcast-details/DetailsColumns'
import useGetPodcastEpisodes from '../components/hooks/useGetPodcastEpisodes'

const PodcastDetails = () => {
  const { podcastId } = useParams()
  const { episodes, isLoading } = useGetPodcastEpisodes(podcastId)

  return (
    <Container>
      <section>
        {isLoading
          ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          : <DetailsColumns
              podcastId={podcastId}
              episodes={episodes}
            />
        }
      </section>
    </Container>
  )
}

export default PodcastDetails
