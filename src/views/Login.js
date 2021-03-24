import React, { useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';

import { loginRequest } from '../apis/social';
import { actions, useStore } from '../store/store';
import { Button, Form } from 'semantic-ui-react';
import '../assets/login.css';

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (event) => {
    event.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      dispatch({ type: actions.LOGIN, payload: userData });
      if (userData.statusCode === 200) history.push('/');
    });
  };

  const handleChange = (event) => {
    setFormData((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  return (
  <div className="colorbg">
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
            pattern =".{3,}" 
            
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
        <Button type="submit">Submit</Button>
      </Form>
      <hr />
      <Link to="/signup">
        <Button id="create-account" type="button">Create New Account</Button>
      </Link>
    </div>
    </div>
  );
}

export default Login;
