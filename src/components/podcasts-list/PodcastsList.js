import { Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import PodcastCard from './podcast-card/PodcastCard'
import useGetPodcastList from '../hooks/useGetPodcastList'

const PodcastsList = () => {
  const { podcasts, isLoading } = useGetPodcastList()

  return (
    <section>
      <Container>
        {isLoading
          ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          : <Row>
            <ul>
              {
                podcasts.map(podcast => {
                  return (
                    <PodcastCard
                      key={podcast.id.attributes['im:id']}
                      name={podcast['im:name']?.label}
                      image={podcast['im:image'][1]?.label}
                    />
                  )
                })
              }
            </ul>
          </Row>
        }
      </Container>
    </section>

  )
}

export default PodcastsList
