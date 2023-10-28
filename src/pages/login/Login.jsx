import React, { useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const {login} = useContext(AuthContext); 
  const handleLogin = ()=>{
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello Guys!</h1>
            <p>
            Logging into Vibe Social Book is a breeze. Once you're in, enjoy connecting with friends, sharing updates, and exploring the vibrant SocialBook community!
            </p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
                <button onClick={handleLogin}>Login</button>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Login
