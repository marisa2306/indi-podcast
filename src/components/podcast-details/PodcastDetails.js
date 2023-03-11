import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import PodcastCard from './podcast-details-card/PodcastDetailsCard'
import useGetPodcastDetails from '../hooks/useGetPodcastDetails'

const PodcastDetails = () => {
  const { podcast, isLoading } = useGetPodcastDetails()

  return (
    <Container>
      <section>
        {isLoading
          ? <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          : <Row>
                <Col md={{ span: 4 }} lg={{ span: 3, offset: 1 }}>
                    <PodcastDetailsCard
                        key={podcast?.id?.attributes['im:id']}
                        name={podcast['im:name']?.label}
                        image={podcast['im:image'][1]?.label}
                        author={podcast['im:artist']?.label}
                        podcastId={podcast?.id?.attributes['im:id']}
                    />
                </Col>
                <Col md={{ span: 8 }} lg={{ span: 8 }}>

                </Col>

              </Row>

        }
      </section>
      </Container>
  )
}

export default PodcastDetails
