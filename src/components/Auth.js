import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context.js';

const Auth = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [loader, setLoader] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let url;
    setLoader(true);
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBl7D7zyCNR5sMHVpkoQEpB1ZHtT9LtwSc';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBl7D7zyCNR5sMHVpkoQEpB1ZHtT9LtwSc';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoader(false);
      if (!response.ok) {
        const data = await response.json();
        let errorMessage = 'Authentication failed!';
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      authCtx.login(data.idToken);
      console.log(authCtx.isLoggedIn)
      navigate('/');
    } catch (err) {
      alert(err.message);
      setLoader(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center  bg-black text-white">
      <h1 className="text-2xl font-bold my-5">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg my-12" onSubmit={submitFormHandler}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Your Email</label>
          <input type="email" id="email" ref={emailRef} required className=" text-black w-full p-2 border border-gray-600 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Your Password</label>
          <input type="password" id="password" ref={passwordRef} required className=" text-black w-full p-2 border border-gray-600 rounded" />
        </div>
        <div className="mb-4">
          {loader ? (
            <p className="text-sky-500">Sending Request....</p>
          ) : (
            <button className="w-full p-2 bg-sky-500 hover:bg-sky-600 text-white rounded">{isLogin ? 'Login' : 'Create Account'}</button>
          )}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-sky-500 hover:text-sky-600"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
