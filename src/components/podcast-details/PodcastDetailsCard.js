import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import DetailsCard from '../ui/DetailsCard'

const PodcastDetailsCard = ({ name, image, author, podcastId, description }) => {
  return (
    <Col md={{ span: 4 }} lg={{ span: 3, offset: 1 }}>
      <DetailsCard>
        <Link className="card-link" to={`/podcast/${podcastId}`} title={name}>
          <div>
            <img className="img" src={image} title={name} alt={`${name} image`}/>
          </div>
          <hr/>
          <h3>{name}</h3>
          <p>{`by: ${author}`}</p>
        </Link>
        <hr/>
        <h4>Description:</h4>
        <p>{description}</p>
      </DetailsCard>
    </Col>
  )
}

export default PodcastDetailsCard
