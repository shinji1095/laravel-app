import React, { useCallback } from 'react'
//import { withRouter, RouteComponentProps } from 'react-router-dom'
import { loginWithGoogle } from '../utils/firebase'

const LoginWithGoogle: React.FC = ({  }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      await loginWithGoogle()
    },
    []
  )

  return (
    <>
      <button onClick={handleSubmit} className='btn btn-success'>
        Googleでログイン
      </button>
    </>
  )
}

export default LoginWithGoogle