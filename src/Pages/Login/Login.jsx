import React from 'react'
import './Login.css'
import login from '../../assets/login.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className='login-container'>
      <div className="login-card">
        <div className="pics-container">
          <img src={login} className='login-img' alt="" />
        </div>
        <h2 className='login-heading'>Login Now</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="username" className='form-label'>Username*</label>
            <input type="text" placeholder="Enter your Username" name="username" class="username" value={username} onChange={handleSubmit} required=""></input>
          </div>
          <div className='flex'>
            <label htmlFor="password" className='form-label'>Password*</label>
            <input type="text" placeholder="Enter your password" name="username" value={password} onChange={handleSubmit} class="username" required=""></input>
          </div>
          <label class="checkbox-container">Remember Me
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <button className='login-button' type='submit' >Login</button>
        </form>
        <div className='flex-row'>
          <Link to='/register' className='link'><p className='blue'>Don't have an account ?</p></Link>
          <p className='blue'>Forget password</p>
        </div>
      </div>
    </div>
  )
}

export default Login