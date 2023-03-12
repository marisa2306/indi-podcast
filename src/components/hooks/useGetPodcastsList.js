import { useEffect, useState, useContext } from 'react'
import PodcastsContext from '../../context/PodcastsContext'
import axios from 'axios'
import URLS from '../../config/URLs'

const useGetPodcastsList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { podcasts, setPodcasts } = useContext(PodcastsContext)

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
