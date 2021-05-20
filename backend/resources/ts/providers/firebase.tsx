import React , { useState, useEffect } from "react";

import { app } from "../utils/firebase";
import firebase from "firebase/app";
import  FirebaseContext  from "../contexts/firebase";

const FirebaseProvider: React.FC = ({ children }) => {
    const [user   , setUser   ] = useState< firebase.User | null >(null)
    const [pending, setPending] = useState< boolean >(true)

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setUser(user)
            setPending(false)
      })
    }, [])

  if (pending) {
      return <div className='loading'>ローディング中...</div>
  }

  return (
      <FirebaseContext.Provider
          value={{
              user,
          }}
      >
          {children}
      </FirebaseContext.Provider>
  )
}

export default FirebaseProvider