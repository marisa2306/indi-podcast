import { Card, Img, Title } from '../../ui/Card'
import { Col } from 'react-bootstrap'

const PodcastCard = ({ name, image }) => {
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} md={4} lg={3}>
      <li style={{ listStyleType: 'none' }}>
        <Card >
          <Img src={image} title={name} alt={`${name} image`}/>
          <Title>{name}</Title>

        </Card>
      </li>
    </Col>
  )
}

export default PodcastCard
