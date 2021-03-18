import React, { useState } from 'react';
import { loginRequest } from '../apis/social';
import { actions, useStore } from '../store/store';
import {Button, Form} from 'semantic-ui-react';

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  
  
  return (
  <Form>
    <Form.Field>
      <label>User Name</label>
      <input placeholder='User Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password'/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)
};

export default Login;
