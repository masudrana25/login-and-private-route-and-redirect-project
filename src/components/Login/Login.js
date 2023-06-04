import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from './config';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const hanldeGoogleLoginPopupClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h1>log in please</h1>
      <button onClick={hanldeGoogleLoginPopupClick}>Login with google popup</button>
    </div>
  );
};

export default Login;