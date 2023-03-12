import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import PodcastCard from './PodcastCard'
import PodcastsListHeader from './PodcastsListHeader'
import useGetPodcastsList from '../hooks/useGetPodcastsList'
import useFilterPodcasts from '../hooks/useFilterPodcasts'
import useQuery from '../hooks/useQuery'

const PodcastsList = () => {
  const { query, handleInputSearch } = useQuery()
  const { podcasts, isLoading } = useGetPodcastsList()
  const { filteredPodcasts } = useFilterPodcasts(podcasts, query)

  return (
    <Container>
      <PodcastsListHeader
        podcasts={podcasts}
        handleInputSearch={handleInputSearch}
      />
      <section>
        {isLoading
          ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          : <ul>
              <Row>
                {
                  filteredPodcasts?.map(podcast => {
                    return (
                      <PodcastCard
                        key={podcast?.id?.attributes['im:id']}
                        name={podcast['im:name']?.label}
                        image={podcast['im:image'][2]?.label}
                        author={podcast['im:artist']?.label}
                        podcastId={podcast?.id?.attributes['im:id']}
                        description={podcast?.summary?.label}
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
