import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SingIn.css';

function SignIn() {
  const [state, setState] = useState({
    username: '',
    userEmail: '',
    password: '',
    loginEmail: '',
    loginPassword: '',
    isSignUpFormVisible: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigateHome = () => {
    navigate('/');
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { username, userEmail, password } = state;
    const requestBody = {
      username,
      email: userEmail,
      password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 201) {
        navigateHome();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { loginEmail, loginPassword } = state;

    const requestBody = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 200) {
        navigateHome();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleForm = () => {
    setState((prevState) => ({
      ...prevState,
      isSignUpFormVisible: !prevState.isSignUpFormVisible,
    }));
  };

  const { isSignUpFormVisible } = state;

  return (
    <div className='logInPage'>
      <div className='form-box'>
        {isSignUpFormVisible ? (
          <form onSubmit={handleSignIn} id="form1">
            <p className='optionName'>Sign in</p>
            <label className="fieldName">
              Username:
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleInputChange}
                className="Input-box"
              />
            </label>
            <br />
            <label className="fieldName">
              Email:
              <input
                type="email"
                name="userEmail"
                value={state.userEmail}
                onChange={handleInputChange}
                className="Input-box"
                id='form1Email'
              />
            </label>
            <br />
            <label className="fieldName">
              Password:
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
                className="Input-box"
              />
            </label>
            <br />
            <button className="fieldName" id="sign" type="submit">Sign Up</button>
          </form>
        ) : (
          <form onSubmit={handleLogin} id="form2">
            <p className='optionName'>Log in</p>
            <label className="fieldName">
              Email:
              <input
                type="email"
                name="loginEmail"
                value={state.loginEmail}
                onChange={handleInputChange}
                className="Input-box"
                id='form2Email'
              />
            </label>
            <br />
            <label className="fieldName">
              Password:
              <input
                type="password"
                name="loginPassword"
                value={state.loginPassword}
                onChange={handleInputChange}
                className="Input-box"
              />
            </label>
            <br />
            <button className="fieldName" id="log" type="submit">Login</button>
          </form>
        )}
        <div className='sinlog-mess'>
          {isSignUpFormVisible ? "Already a user? " : "Need an ID? "}
          <button className="logSin" onClick={toggleForm}>
            {isSignUpFormVisible ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
