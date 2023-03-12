import { Card, Img, Title, Author, ImgFrame } from '../ui/Card'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PodcastCard = ({ name, image, author, podcastId, description }) => {
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} md={4} lg={3}>
      <li>
        <Link className="card-link" to={`/podcast/${podcastId}`} state={{ name, image, author, podcastId, description }} title={name}>
          <Card>
            <ImgFrame>
              <Img src={image} title={name} alt={`${name} image`}/>
            </ImgFrame>
            <Title>{name}</Title>
            <Author>{`Author: ${author}`}</Author>
          </Card>
        </Link>
      </li>
    </Col>
  )
}

export default PodcastCard
