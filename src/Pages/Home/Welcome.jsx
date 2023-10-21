import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className='Hom-container'>
    <div className='Home'>
      <div className='Wel-container'>
        <div className="content">
          <h2>FrontEnd</h2>
          <h2>FrontEnd</h2>
        </div>
      </div>
    </div>
    <div className='Link-container'>
       <h1>Team One</h1>
       <div className='Links'>
          <Link to='/Login'>Login</Link>
          <Link to='/register'>Register</Link>
       </div>
    </div>
    </div>
  )
}

export default Welcome;