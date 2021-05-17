import React , {FC, Dispatch, SetStateAction ,useState} from "react";

export const LogIn: FC<{setLogIn: Dispatch<SetStateAction<boolean>>}> = (setLogIn) => {
    return (
        <div className="form-signin text-center">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label htmlFor="aaa">Remember me
                    </label>
                        <input id="aaa" type="checkbox" value="remember-me"/>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </div>
  );

}