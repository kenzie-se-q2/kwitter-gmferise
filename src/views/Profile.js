import React from "react";
import {
  Form,
  TextArea,
  Input,
  Button,
  DimmerDimmable,
} from "semantic-ui-react";
import '../assets/editProfile.css';

function Profile() {
  return (
    <div className="profile">
      <h1>Edit Profile</h1>
      <div className="pic">
        <button>
          <img />
        </button>
      </div>
      <div id="delete-button">
        <Button basic color="red">
          Delete User
        </Button>
      </div>
      <div className="profile-form">
        <Form id="update-user">
          <Form.Field>
            <h4>Display Name</h4>
            <Input placeholder="Display Name" pattern="{1,}"/>
          </Form.Field>
          <Form.Field>
            <h4>About Me</h4>
            <TextArea placeholder="About" pattern="{1,}"/>
          </Form.Field>
          <Button type="submit">Update Profile Info</Button>
        </Form>
      </div>
      <hr />
      <div className="password-form">
      <Form>
        <Form.Field>
          <h4>Current Password</h4>
          <Input placeholder="Current Password" 
          type="password" 
          pattern= "{3,}"
          />
        </Form.Field>
        <Form.Field>
          <h4>New Password</h4>
          
          <Input placeholder="New Password" type="password" pattern="{3,}"/>
        </Form.Field>
        <Button type="submit">Update Password</Button>
      </Form>
      </div>
    </div>
  );
}

export default Profile;
