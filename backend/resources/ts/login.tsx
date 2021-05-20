import React , {FC, Dispatch, SetStateAction ,useState} from "react";
import LoginWithEmail from './AuthItem/LoginWithEmail';
import LoginWithGoogle from './AuthItem/LoginWithGoogle';
import SignupWithEmail from './AuthItem/SignupWithEmail';

export const LogIn: FC = () => {
    return (
        <>
        <div className='form-signin'>
            <div className='wrap-login'>
                <div>
                    <LoginWithEmail />
                </div>
                <hr />
                <div>
                    <LoginWithGoogle />
                </div>
            </div>
            <div className='wrap-signup'>
                <SignupWithEmail />
            </div>
        </div>
        </>
  );
}