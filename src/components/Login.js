import React, { useState } from 'react';
import { loginRequest } from '../apis/social';
import '../assets/login.css';
import { actions, useStore } from '../store/store';

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      dispatch({ type: actions.LOGIN, payload: userData });
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <hr />
      <button id="create-account" type="button">Create New Account</button>
    </div>
  );
}

export default Login;
