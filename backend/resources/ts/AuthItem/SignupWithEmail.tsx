import React, { useCallback } from 'react'
import { signupWithEmail } from '../utils/firebase';

const SignupWithEmail: React.FC = () => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      await signupWithEmail(email.value, password.value)
    },
    []
  )

  return (
    <>
      <div className='header-auth'>
        <span>サインアップ</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="email" name="email" className="form-control" id="signupInput" placeholder="name@example.com"/>
          <label htmlFor="signupInput">Eメールアドレス</label>
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
          <input type="password" name="password" className="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <button type='submit' className="btn btn-info">サインアップ</button>
      </form>
    </>
  )
}

export default SignupWithEmail