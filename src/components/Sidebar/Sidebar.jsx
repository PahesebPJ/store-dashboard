import { Link } from 'react-router-dom'

import UserDetails from '../UserDetails/UserDetails'
import config from '../../config/configTables'

import './Sidebar.css'

const importTableConfiguration = () => {
  console.log('first');
}

const Sidebar = () => {
  
  return (
    <nav className="sidebar-container">
        <UserDetails />
        <ul>
          {
            config.map(link => {
              return (
                  <li className="sidebar-option" onClick={() => importTableConfiguration}>
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