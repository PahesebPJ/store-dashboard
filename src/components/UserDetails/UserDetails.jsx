
import useAuth from "../../hooks/useAuth"
import defaultPofilePic from "../../assets/default_profile_image.jpg"

import './UserDetails.css'

const UserDetails = () => {

    const { auth } = useAuth();

  return (
    <div className="user-details-container">
        {
            auth?.url ? <img src={auth?.url} alt="" className="user-details__image" /> 
            : <img src={defaultPofilePic} alt="" className="user-details__image" />
        }
        <h3 className="welcome-message">Welcome <span>{auth?.username}!</span></h3>
    </div>
  )
}

export default UserDetails