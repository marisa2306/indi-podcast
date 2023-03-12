import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Moment from 'moment'

const EpisodesTable = ({ episodes }) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {episodes?.length > 0 &&
                episodes.map(episode => {
                  return (
                    <tr key={episode?.trackId}>
                      <td>
                        <Link to={`episode/${episode?.trackId}`} title={episode?.trackName}>{episode?.trackName}</Link>
                      </td>
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
