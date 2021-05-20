import React, { FC, useContext } from "react";
import { logout } from "./utils/firebase";
import  FirebaseContext  from "./contexts/firebase";

export const Navbar: FC<{
    handleNav: (nav: string) => void
}> = ({handleNav}) => {
    const { user } = useContext(FirebaseContext);
    console.log("navbar",user)

    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fixed navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">トップ</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                出席管理
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" onClick={() => handleNav("attend")} >出席</a></li>
                                <li><a className="dropdown-item" onClick={() => handleNav("leave")}  >退席</a></li>
                                <li><a className="dropdown-item" onClick={() => handleNav("confirm")}>出欠確認</a></li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="btn btn-outline-light" onClick={logout}>ログアウト</button>
                        </li>
                        <li>
                            { () => {
                                return <p>{"こんにちは　"+ user?.displayName ? user : ""}</p>
                            } }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}