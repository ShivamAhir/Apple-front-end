import React, { Component } from 'react';

import './SignIn.css';

class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      userEmail: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      loggedIn: false,
      isSignUpFormVisible: false,
    };
  }

  // const navigateHome = () => {
  //   history.push('/'); // Navigate to the home page
  // };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const { username, userEmail, password } = this.state;
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

      // Handle response and redirect if needed
      // if (response.status === 200) {
      //   this.navigateHome(); // Use 'this.navigateHome()'
      // } else {
      //   // Handle error
      //   console.error('Error:', response.statusText);
      // }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  handleLogin = async (event) => {
    event.preventDefault();
    const { loginEmail, loginPassword } = this.state;

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

      // Check for success and navigate if needed
      if (response.status === 200) {
        this.navigateHome(); // Use 'this.navigateHome()'
      } else {
        // Handle error
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      isSignUpFormVisible: !prevState.isSignUpFormVisible,
    }));
  };

  render() {
    const { isSignUpFormVisible } = this.state;

    return (
      <div className='logInPage'>
        <div className='form-box'>
          {isSignUpFormVisible ? (
            <form onSubmit={this.handleSignIn} id="form1">
              <p className='optionName'>Sign in</p>
              <label className="fieldName">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="Input-box"
                />
              </label>
              <br />
              <label className="fieldName">
                Email:
                <input
                  type="email"
                  name="userEmail"
                  value={this.state.userEmail}
                  onChange={this.handleInputChange}
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
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="Input-box"
                />
              </label>
              <br />
              <button className="fieldName" id="sign" type="submit">Sign Up</button>
            </form>
          ) : (
            <form onSubmit={this.handleLogin} id="form2">
              <p className='optionName'>Log in</p>
              <label className="fieldName">
                Email:
                <input
                  type="email"
                  name="loginEmail"
                  value={this.state.loginEmail}
                  onChange={this.handleInputChange}
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
                  value={this.state.loginPassword}
                  onChange={this.handleInputChange}
                  className="Input-box"
                />
              </label>
              <br />
              <button className="fieldName" id="log" type="submit" >Login</button>
            </form>
          )}
          <div className='sinlog-mess'>
            {isSignUpFormVisible ? "Already a user? " : "Need an ID? "}
            <button className="logSin" onClick={this.toggleForm}>
              {isSignUpFormVisible ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
