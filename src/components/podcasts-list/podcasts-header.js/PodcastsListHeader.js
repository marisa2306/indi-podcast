import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import { ListHeader, SearchBarWrapper } from '../../ui/ListHeader'

const PodcastsListHeader = ({ podcasts }) => {
  return (
    <ListHeader>
      <SearchBarWrapper>
        <Badge bg="primary">
        {podcasts?.length}
        </Badge>
        <InputGroup>
        <Form.Control
            placeholder="Filter products..."
        />
        </InputGroup>
      </SearchBarWrapper>
    </ListHeader>
  )
}

export default PodcastsListHeader
