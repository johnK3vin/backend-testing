import React from 'react'
import error from '../../assets/error.png';
import './Error.css';
const Error = () => {
  return (
    <div className='error-container'>
        <img src={error} alt="imagen de error 404" />
        <div>
            <a href="/login">Login</a>
        </div>
    </div>
  )
}

export default Error