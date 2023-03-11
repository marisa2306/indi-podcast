import { useEffect, useState } from 'react'
import axios from 'axios'
import URLS from '../../config/URLs'

const useGetPodcastDetails = () => {
  const [podcast, setPodcast] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${URLS.GET_PODCAST_DETAILS}`)
      .then((res) => {
        // setPodcast(res)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    podcast,
    isLoading
  }
}

export default useGetPodcastDetails
