import { Link } from 'react-router-dom'
import useContent from '../../hooks/useContent'

import UserDetails from '../UserDetails/UserDetails'
import config from '../../config/configTables'

import './Sidebar.css'

const Sidebar = () => {

  const { setContent} = useContent();

  const captureContent = (data) => {
    setContent(data);
  }

  return (
    <nav className="sidebar-container">
        <UserDetails />
        <ul>
          {
            config.map(link => {
              return (
                  <li className="sidebar-option" onClick={() => captureContent(link)} key={link.name}>
                    <Link 
                      className="sidebar-option__link" 
                      to={link.route}
                    >
                      {link.name}
                    </Link>
                  </li>
              )
            })
          }
        </ul>
    </nav>
  )
}

export default Sidebar