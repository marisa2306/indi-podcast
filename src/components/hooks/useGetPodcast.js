import { useEffect, useState } from 'react'

const useGetPodcast = (location) => {
  const [podcast, setPodcast] = useState({})

  useEffect(() => {
    setPodcast(location?.state)
    localStorage.setItem('podcast', podcast)
  }, [location])

  return {
    podcast
  }
}

export default useGetPodcast
