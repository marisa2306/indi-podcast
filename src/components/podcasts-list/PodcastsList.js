import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import PodcastCard from './podcast-card/PodcastCard'
import PodcastsListHeader from './podcasts-header.js/PodcastsListHeader'
import useGetPodcastsList from '../hooks/useGetPodcastsList'
import useFilterPodcasts from '../hooks/useFilterPodcasts'

const PodcastsList = () => {
  const [query, setQuery] = useState('')

  const { podcasts, isLoading } = useGetPodcastsList()
  const { filteredPodcasts } = useFilterPodcasts(podcasts, query)

  const handleInputSearch = (e) => {
    setQuery(e.target.value)
  }

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
