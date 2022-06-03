import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './Register.css'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from '../../api/axios'

const REGISTER_URL = "/register"

//Regex for username and password
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/

const Register = () => {

    const usernameRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validUsername, setValidUsername] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        usernameRef.current.focus();
    },[]);

    useEffect(() => {
        const result = USER_REGEX.test(username);
        setValidUsername(result);
    },[username]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        const match = password === confirmPassword;
        setValidConfirmPassword(match);
    },[password,confirmPassword]);

    useEffect(() => {
        if(errMsg) {
            setErrMsg('');
        }
    },[username, password]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validUsername || !validPassword) {
            setErrMsg('Please fill in all fields');
            return;
        }

        try {
            const response = await axios.post(REGISTER_URL, {username, password});
            if(response.status === 203) {
                setErrMsg('User already exists');
                return;
            } else if(response.status === 200) {
                setErrMsg('User created');
                setUsername('');
                setPassword('');
                setConfirmPassword('');
            }
        }catch(err) {
            setErrMsg(err.message);
        }
    }

  return (
    <section className="register-container">
        <div className="register-container-box">
            <p className="error-message">{errMsg}</p>

            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
                <input 
                    type="text"
                    id="username"
                    ref={usernameRef}
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Type your username"
                />

                <label htmlFor="password">Password</label>
                <FontAwesomeIcon icon={faLock} className="password-icon"/>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type your password" 
                />

                <label htmlFor="password">Confirm password</label>
                <FontAwesomeIcon icon={faLock} className="password-icon-2"/>
                <input 
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password" 
                />

                <button 
                    disabled={!validUsername || !validPassword || !validConfirmPassword ? true : false} 
                    className="register-button"
                >
                    Register
                </button>
            </form>
            <p>
                Already have an account?
            </p>

            <Link to="/login" className="login-link">Login</Link>
        </div>
    </section>
  )
}

export default Register;