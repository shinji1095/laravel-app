import React, {useState} from 'react'
import {LogIn} from "./login";
import {Main} from "./main";
import ReactDOM from 'react-dom';
 
const App : React.FC = () => {
    const [logIn, setLogIn] = useState<boolean>(true);

    return (
        logIn? <Main />:<LogIn setLogIn={setLogIn} />
    )
}
 
ReactDOM.render(
    <App />,
    document.getElementById('SAM')
)