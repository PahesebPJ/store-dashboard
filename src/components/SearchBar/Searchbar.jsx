import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className="searchbar-container">
        <form className="searchbar-form">
            <input type="text" placeholder="Search" />
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </form>
    </div>
  )
}

export default Searchbar