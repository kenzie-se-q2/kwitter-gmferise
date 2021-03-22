import React from 'react';
import { Form, TextArea, Input, Button } from 'semantic-ui-react'


function Profile () {
    return(
<div className="profile">
    <h1>Edit Profile</h1>
    <div className="pic"><button><img /></button></div>
    <Button basic color='red'>
      Delete User
    </Button>
      <Form>
      <Form.Field>
        <h4>Display Name</h4>
        <Input placeholder='Type Here' />
      </Form.Field>
      <Form.Field>
        <h4>About Me</h4>
        <TextArea placeholder='About' />
      </Form.Field>
      <Button type='submit'>Update Profile Info</Button>
        </Form>
        <hr></hr>
      <Form>
          <Form.Field>
          <h4>Current Password</h4>
        <Input placeholder='Type Here' type="password" />
          </Form.Field>
          <Form.Field>
          <h4>New Password</h4>
          <Input placeholder='Type Here' type="password" />
          </Form.Field>
          <Button type='submit'>Update Password</Button>
      </Form>

    </div>
    )
}

export default Profile