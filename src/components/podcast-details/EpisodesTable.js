import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Moment from 'moment'

const EpisodesTable = ({ episodes, podcastId }) => {
  return (
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
                    <tr key={episode?.trackId}>
                        <Link to={`/podcast/${podcastId}/episode/${episode?.trackId}`}>
                            <td>{episode?.trackName}</td>
                        </Link>
                        <td>{Moment(episode?.releaseDate).format('DD/MM/YYYY')}</td>
                        <td>{new Date(episode?.trackTimeMillis * 1000).toISOString().substr(11, 8)}</td>
                    </tr>
                  )
                })
            }
        </tbody>
    </Table>
  )
}

export default EpisodesTable
