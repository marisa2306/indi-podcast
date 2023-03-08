
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './views/Home'
import PodcastDetails from './views/PodcastDetails'
import EpisodeDetails from './views/EpisodeDetails'

function App () {
  return (
    <div className="App">
     <header className='margin-auto'>
        <nav>
          <ul>
            <li className="text-left">
              <Link className="home-link" to={'/'}>Podcaster</Link>
            </li>
          </ul>
          <hr/>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />
      </Routes>
    </div>
  )
}

export default App
