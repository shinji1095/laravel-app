import 'firebase/auth';
import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyAUN0OdaN0Aeq9l-vs4zXaaZwLv-RTW6HE",
  authDomain: "stoked-flame-310313.firebaseapp.com",
  databeseURL: "",
  projectId: "stoked-flame-310313",
  storageBucket: "stoked-flame-310313.appspot.com",
  messagingSenderId: "947392343777",
  appId: "1:947392343777:web:9676acdb7980a9e46651a0",
  measurementId: "",
}

const app = firebase.initializeApp(config);

const loginWithEmail = async (email: string, password: string) => {
  try {
      await app.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
      alert(error)
  }
}

const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
      await firebase.auth().signInWithPopup(provider)
  } catch (error) {
      alert(error)
  }
}

const signupWithEmail = async (email: string, password: string) => {
  try {
      await app.auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
      alert(error)
  }
}

const logout = () => {
  app.auth().signOut()
}



export {
    app,
    loginWithEmail,
    loginWithGoogle,
    signupWithEmail,
    logout
}