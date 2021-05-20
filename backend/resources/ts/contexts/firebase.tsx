import React from 'react'
import firebase from 'firebase/app'

type FirebaseContextType = {
  user: firebase.User | null
}

const FirebaseContext = React.createContext<FirebaseContextType>({
  user: null,
})

export default FirebaseContext