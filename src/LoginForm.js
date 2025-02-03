import React from 'react'
import './LoginForm.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaUser, FaLock  } from "react-icons/fa";
function LoginForm() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
      <h2 className='mb-3'>Login Form</h2>
      <form className='needs-validation'>
      <div className=' mb-2'>
        <label htmlFor='email' className='form-label'>Email address</label>
        <input type='email' className='form-control' placeholder='Username' required/>
        <FaUser className='icon'/>
      </div>
      <div className=' mb-2'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password' className='form-control' placeholder='Password'  required></input>
        <FaLock className='icon'/>
      </div>
      <div className=' mb-4'>
        <label><input type="checkbox"/>Remember me</label>
        <a href='#'>Forgot password?</a>
        </div>
      <button type='submit'>Sign in</button>

      <div className="re-1">
        <p>Don't have anaccount? <a href='#'>Register</a></p>
      </div>
  
      </form>
    </div>
    </div>
  )
}

export default LoginForm