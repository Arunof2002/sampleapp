import React from 'react'
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function LoginForm() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
      <h2 className='mb-3'>Login Form</h2>
      <form>
      <div className='form-group mb-2'>
        <label htmlFor='email'>Email address</label>
        <input type='email'></input>
      </div>
      <div className='form-group mb-2'>
        <label htmlFor='password'>Password</label>
        <input type='password'></input>
      </div>
      <div className='form-group mb-2'>
        <label htmlFor='check'>Remember me</label>
        <input type='checkbox'></input>
      </div>
      <button type='submit' className='btn btn-success mt-2'>Sign in</button>
      </form>
    </div>
    </div>
  )
}

export default LoginForm