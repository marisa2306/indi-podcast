import { Link } from 'react-router-dom'

const HeaderApp = () => {
  return (
    <header className='margin-auto'>
        <nav>
            <ul>
                <li className="text-left">
                <Link className="home-link" to={'/'} title='Podcaster home page'>
                    <h1>Podcaster</h1>
                </Link>
                </li>
            </ul>
            <hr/>
        </nav>
    </header>
  )
}

export default HeaderApp