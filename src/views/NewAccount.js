import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const NewAccount = (props) => {
  return (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Display Name</label>
      <input placeholder='Display Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
   
    <Button type='submit'>Submit</Button>

  </Form>

);
}
export default NewAccount
