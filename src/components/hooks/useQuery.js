import { useState } from 'react'

const useQuery = () => {
  const [query, setQuery] = useState('')

  const handleInputSearch = (e) => {
    setQuery(e.target.value)
  }

  return {
    query,
    handleInputSearch
  }
}

export default useQuery
