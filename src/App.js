
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeaderApp from './components/header/HeaderApp'
import Home from './views/Home'
import PodcastDetails from './views/PodcastDetails'
import EpisodeDetails from './views/EpisodeDetails'
import ROUTES from './config/podcasts.routes'

function App () {
  return (
    <div className="App">
      <HeaderApp />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DETAIL} element={<PodcastDetails />}>
          <Route path={ROUTES.EPISODE} element={<EpisodeDetails />} />
        </Route>
        <Route path='*' element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
