import React, { useState } from 'react'

const EpisodesContext = React.createContext({})

export function EpisodesContextProvider ({ children }) {
  const [episodes, setEpisodes] = useState([])

  return <EpisodesContext.Provider value={{ episodes, setEpisodes }}>
    {children}
    </EpisodesContext.Provider>
}

export default EpisodesContext
