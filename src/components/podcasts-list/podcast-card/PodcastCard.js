import { Card, Img, Title, Author, ImgFrame } from '../../ui/Card'
import { Col } from 'react-bootstrap'

const PodcastCard = ({ name, image, author }) => {
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 0 }} md={4} lg={3}>
      <li style={{ listStyleType: 'none' }}>

        <Card >
          <ImgFrame>
            <Img src={image} title={name} alt={`${name} image`}/>
          </ImgFrame>
          <Title>{name}</Title>
          <Author>{`Author: ${author}`}</Author>
        </Card>
      </li>
    </Col>
  )
}

export default PodcastCard
