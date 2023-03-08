import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetPodcastList = () => {
  const [podcasts, setPodcasts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then((res) => {
        setPodcasts(res.data.feed.entry)
      })
      .catch(e => {
        console.log(e)
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

export default useGetPodcastList
