import React from 'react'
import './Register.css'
import login from '../../assets/login.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Register() {

const [username, setUsername] = useState('')  
const [password, setPassword] = useState('')  

const handleUsernameChange = (e) =>{
setUsername(e.target.value)
}
const handlePasswordChange = (e) =>{
  setPassword(e.target.value)
  }

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(username)
  
}


  return (
    <div className='login-container'>

     


      <div className="login-card-register">
        <div className="pics-container">
          <img src={login} className='login-img' alt="" />
        </div>

        <h2 className='login-heading'>Regsiter Now</h2>

        <form action="" onSubmit={handleSubmit}>

        <div className='flex'>
            <label htmlFor="fullname" className='form-label'>Fullname*</label>
            <input type="text" placeholder="Enter your Fullname" name="fullname" class="fullname"  onChange={handleSubmit} required=""></input>
          </div>

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

          <button className='login-button' type='submit' >Register</button>

        </form>

        <div className='flex-row'>
         <Link to='/login' className='link'><p className='blue'>Already have an account ?</p></Link> 
          <p className='blue'>Forget password</p>
        </div>

      </div>

    
    </div>
  )
}

export default Register