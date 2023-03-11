import { useEffect, useState } from 'react'

const useSearch = (podcasts, query) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState([])

  useEffect(() => {
    if (podcasts?.length > 0) {
      if (query !== '') {
        const q = query?.toLowerCase()
        const filtered = podcasts?.filter(
          podcast => {
            const author = podcast['im:artist']?.label?.toLowerCase()?.includes(q)
            const name = podcast['im:name']?.label?.toLowerCase()?.includes(q)
            return author || name
          }
        )
        setFilteredPodcasts([...filtered])
      } else {
        setFilteredPodcasts([...podcasts])
      }
    }
  }, [query, podcasts])

  return {
    query,
    filteredPodcasts
  }
}

export default useSearch
