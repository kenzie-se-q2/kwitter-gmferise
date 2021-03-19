import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import "../assets/newaccount.css"

const NewAccount = (props) => {
  return (
    <div className="colorbg">
      <div id="newaccount-form">
        <h1>Sign Up</h1>
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
            <input type="password" placeholder='Password' />
          </Form.Field>
        
          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    </div>

);
}
export default NewAccount