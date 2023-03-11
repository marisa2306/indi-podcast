import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import { ListHeader, SearchBarWrapper } from '../../ui/ListHeader'

const PodcastsListHeader = ({ handleInputSearch, podcasts }) => {
  return (
    <ListHeader>
      <SearchBarWrapper>
        <Badge bg="primary" style={{ marginRight: '1em' }}>
        {podcasts?.length}
        </Badge>
        <InputGroup>
        <Form.Control
          onChange={handleInputSearch}
          placeholder="Filter products..."
        />
        </InputGroup>
      </SearchBarWrapper>
    </ListHeader>
  )
}

export default PodcastsListHeader
