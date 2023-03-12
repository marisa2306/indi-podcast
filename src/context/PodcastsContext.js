import React, { useState } from 'react'

const PodcastsContext = React.createContext({})

export function PodcastsContextProvider ({ children }) {
  const [podcasts, setPodcasts] = useState([])

  return <PodcastsContext.Provider value={{ podcasts, setPodcasts }}>
    {children}
  </PodcastsContext.Provider>
}

export default PodcastsContext
