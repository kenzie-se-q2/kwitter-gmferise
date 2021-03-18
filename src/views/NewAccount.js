import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form } from 'semantic-ui-react'

const NewAccount = (props) => {
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Full name</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
   
    <Button type='submit'>Submit</Button>

  </Form>
  return (
<div className= "New-Account"> 
<h1>Creat New Account</h1>


<form class="ui form">
<div class="field">
<label>Username</label>
<input placeholder="Username"/>
</div>

<div class="field">
<label>Password</label>
<input placeholder="new Password"/>
</div>



<button type="submit" class="ui button">Submit</button>
</form>


</div>
);
}
export default NewAccount
  reactDom.render(<App />, document.getElementById("root"));