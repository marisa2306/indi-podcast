import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import PodcastCard from './podcast-card/PodcastCard'
import PodcastsListHeader from './podcasts-header.js/PodcastsListHeader'
import useGetPodcastList from '../hooks/useGetPodcastList'

const PodcastsList = () => {
  const { podcasts, isLoading } = useGetPodcastList()

  return (
    <Container>
      <PodcastsListHeader
        podcasts={podcasts}
      />
      <section>
        {isLoading
          ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          : <ul>
              <Row>
                {
                  podcasts?.map(podcast => {
                    return (
                      <PodcastCard
                        key={podcast?.id?.attributes['im:id']}
                        name={podcast['im:name']?.label}
                        image={podcast['im:image'][1]?.label}
                        author={podcast['im:artist']?.label}
                        podcastId={podcast?.id?.attributes['im:id']}
                      />
                    )
                  })
                }
              </Row>
            </ul>
        }
      </section>
      </Container>
  )
}

export default PodcastsList
