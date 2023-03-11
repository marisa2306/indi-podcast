import { useEffect, useState } from 'react'
import axios from 'axios'
import URLS from '../../config/URLs'

const useGetPodcastEpisodes = (podcastId) => {
  const [episodes, setEpisodes] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${URLS.PROXY_URL}${URLS.GET_PODCAST_DETAILS}${podcastId}&entity=podcastEpisode`)
      .then((res) => {
        setEpisodes(res.data.results)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    episodes,
    isLoading
  }
}

export default useGetPodcastEpisodes
