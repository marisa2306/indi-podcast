import { useEffect, useState } from 'react'

const useSearch = (podcasts, query) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState([])

  useEffect(() => {
    if (podcasts?.length > 0) {
      if (query !== '') {
        const q = query?.toLowerCase()
        const filtered = podcasts?.filter(
          podcast => {
            const author = podcast['im:artist']?.label
            const name = podcast['im:name']?.label
            return author?.toLowerCase()?.includes(q) || name?.toLowerCase()?.includes(q)
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
