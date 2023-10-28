import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Vibe Social</h1>
            <p>
            Logging into SocialBook is a breeze. Once you're in, enjoy connecting with friends, sharing updates, and exploring the vibrant SocialBook community!
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='Username'></input>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <button>Register</button>
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Register;
