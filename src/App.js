
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './views/Home'
import PodcastDetails from './views/PodcastDetails'
import EpisodeDetails from './views/EpisodeDetails'
import ROUTES from './config/podcasts.routes'

function App () {
  return (
    <div className="App">
     <header className='margin-auto'>
        <nav>
          <ul>
            <li className="text-left">
              <Link className="home-link" to={'/'}>
                <h1>Podcaster</h1>
              </Link>
            </li>
          </ul>
          <hr/>
        </nav>
      </header>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DETAIL} element={<PodcastDetails />}>
          <Route path={ROUTES.EPISODE} element={<EpisodeDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
