import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Moment from 'moment'

const EpisodesList = ({ episodes }) => {
  return (
    <Col md={{ span: 8 }} lg={{ span: 8 }}>
      <Card className='mb-4'>
        <Card.Body>
          <h2 style={{ textAlign: 'left' }}>Episodes: {episodes?.length}</h2>
        </Card.Body>
      </Card>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody style={{ maxHeight: '120px', overflowY: 'scroll' }}>
          {episodes?.length > 0 &&
            episodes.map(episode => {
              return (
                <tr key={episode?.episodeGuid}>
                  <td>{episode?.trackName}</td>
                  <td>{Moment(episode?.releaseDate).format('DD/MM/YYYY')}</td>
                  <td>{new Date(episode?.trackTimeMillis * 1000).toISOString().substr(11, 8)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Col>
  )
}

export default EpisodesList
