import React, {useState, useCallback} from 'react'
import {LogIn} from "./login";
import {Top} from "./top";
import ReactDOM from 'react-dom';
 
const App : React.FC = () => {
    const [logIn, setLogIn] = useState<boolean>(false);

    return (
        logIn? <Top />:<LogIn setLogIn={setLogIn} />
    )
}
 
ReactDOM.render(
    <App />,
    document.getElementById('SAM')
)