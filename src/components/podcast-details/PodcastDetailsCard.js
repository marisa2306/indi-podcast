import Col from 'react-bootstrap/Col'
import DetailsCard from '../ui/DetailsCard'
import { Link, useLocation } from 'react-router-dom'
// import { useEffect } from 'react';

const PodcastDetailsCard = () => {
  const location = useLocation()
  return (
    <Col md={{ span: 4 }} lg={{ span: 3, offset: 1 }}>
      <Link className="card-link" to={`/podcast/${location?.state?.podcastId}`}>
        <DetailsCard>
          <div>
            <img className="img" src={location?.state?.image} title={location?.state?.name} alt={`${location?.state?.name} image`}/>
          </div>
          <hr/>
          <h3>{location?.state?.name}</h3>
          <p>{`by: ${location?.state?.author}`}</p>
          <hr/>
          <h4>Description:</h4>
          <p>{location?.state?.description}</p>
        </DetailsCard>
      </Link>
    </Col>
  )
}

export default PodcastDetailsCard
