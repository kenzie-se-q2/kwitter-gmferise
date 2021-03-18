import React, { useState } from 'react';
import { loginRequest } from '../apis/social';
import { actions, useStore } from '../store/store';
import { Button, Form } from 'semantic-ui-react'
import "../assets/Login.css"

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
    <div style={{height: 'inherit', width: 'inherit', backgroundColor: '#7a7474'}}>
      <div id="login-form">
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      <hr />
      <Button id="create-account" type="button">Create New Account</Button>
    </div>
    </div>
  );
}

export default Login;
