import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import PodcastDetails from './views/PodcastDetails'
import EpisodeDetails from './views/EpisodeDetails'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />

      </Routes>
    </div>
  )
}

export default App
