import { useEffect, useState } from 'react'
import axios from 'axios'
import URLS from '../../config/URLs'

const useGetPodcastsList = () => {
  const [podcasts, setPodcasts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${URLS.PROXY_URL}${URLS.GET_ALL_PODCASTS}`)
      .then((res) => {
        setPodcasts(res.data.feed.entry)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    podcasts,
    isLoading
  }
}

export default useGetPodcastsList
