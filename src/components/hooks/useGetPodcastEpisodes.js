import { useEffect, useState, useContext } from 'react'
import EpisodesContext from '../../context/EpisodesContext'
import axios from 'axios'
import URLS from '../../config/URLs'

const useGetPodcastEpisodes = (podcastId) => {
  const [isLoading, setIsLoading] = useState(true)
  const { episodes, setEpisodes } = useContext(EpisodesContext)

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
