import React from 'react'
import './LoginForm.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaUser, FaLock  } from "react-icons/fa";
function LoginForm() {
  return (
    <div className='wrapper'>
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
    <input 
      type='password' 
      id='password' 
      className='form-control pr-10' 
      placeholder='Password' 
      required 
      minLength={8} 
      maxLength={12} 
    />
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

export default LoginForm;