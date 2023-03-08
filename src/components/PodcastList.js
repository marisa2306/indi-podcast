import useGetPodcastList from './hooks/useGetPodcastList'

const PodcastList = () => {
  const { podcasts, isLoading } = useGetPodcastList()

  if (isLoading) {
    return <p>...Loading</p>
  }

  return (
    <ul>
        {
            podcasts.map(podcast => {
              return (
                    <li key={podcast.id.attributes['im:id']}>
                        {podcast['im:name']?.label}
                    </li>
              )
            })
        }
    </ul>
  )
}

export default PodcastList
