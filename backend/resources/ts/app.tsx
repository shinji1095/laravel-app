import React, { useContext, useEffect } from 'react'
import { LogIn } from "./login";
import { Main } from "./main";
import ReactDOM from 'react-dom';

import FirebaseProvider from "./providers/firebase";
import FirebaseContext  from "./contexts/firebase";
 
const App : React.FC = () => {
    const { user }  = useContext(FirebaseContext);

    return (
        user !== null ? <Main />:<LogIn/>
    )
}
 
ReactDOM.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>,

    document.getElementById('SAM')
)