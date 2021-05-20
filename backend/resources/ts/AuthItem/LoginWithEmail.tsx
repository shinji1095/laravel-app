import React, { useCallback } from 'react'
import { loginWithEmail } from '../utils/firebase'

const LoginWithEmail: React.FC = () => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements;
      await loginWithEmail(email.value, password.value)
    },
    []
  )

  return (
    <>
      <div className='row'>
        <span>ログイン</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="col-auto">
          <label htmlFor="loginInputPass" className="visually-hidden">Password</label>
          <input type="password" name="password" className="form-control" id="loginInputPass" placeholder="Password"/>
        </div>
        <button className="btn btn-primary"  type='submit'>ログイン</button>
      </form>
    </>
  )
}

export default LoginWithEmail