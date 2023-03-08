import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PodcastCard from './PodcastCard'
import useGetPodcastList from '../hooks/useGetPodcastList'

const PodcastsList = () => {
  const { podcasts, isLoading } = useGetPodcastList()

  if (isLoading) {
    return <p>...Loading</p>
  }

  return (
    <Container>
      <Row>
        <ul>
            {
              podcasts.map(podcast => {
                return (
                  <PodcastCard
                    key={podcast.id.attributes['im:id']}
                    name={podcast['im:name']?.label}
                  />
                )
              })
            }
        </ul>
      </Row>
    </Container>

  )
}

export default PodcastsList
