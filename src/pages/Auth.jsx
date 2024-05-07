import React from 'react'
import logo from '../assets/icons/logos/inst.svg'
import facebook from '../assets/icons/logos/facebook.svg'
import arrow from '../assets/icons/arrow.svg'

const Auth = () => {
  return (
    <div className='auth text-text-white'>
      <div className='px-4 pt-3'>
        <img src={arrow} alt="" />
      </div>
      <div className="auth-container">
        <div className="auth-content">
          <div className='auth-logo'>
            <img src={logo} alt="inst-logo" />
          </div>
          <div className="auth-input flex flex-col gap-3">
            <input type="text" placeholder='Login' />
            <input type="text" placeholder='Password' />
          </div>
          <p className='auth-forgot'>Forgot password?</p>
          <button className="auth-btn">Login</button>
          <div className="auth-facebook flex text-primary justify-center mt-9">
            <img src={facebook} alt="" className='mr-2.5' />
            Log in with Facebook
          </div>
          <div className="auth-or">
            <span>OR</span>
          </div>
          <p className='auth-havent'>
            Don’t have an account? <span>Sign up.</span>
          </p>
        </div>
      </div>
      <footer>
        Instagram from Facebook
      </footer>
    </div>
  )
}

export default Auth