import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form,
  TextArea,
  Input,
  Button,
} from 'semantic-ui-react';
import '../assets/editProfile.css';
import { actions, useProtected, useStore } from '../store/store';
import { updateUser, deleteUser, getUser, logoutRequest, } from '../apis/social';
import ProfilePicture from '../components/ProfilePicture';

function Profile() {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();
  const [formData, setFormData] = useState({
    displayName: '',
    about: '',
    password: '',
    picture: '',
  });
  
  useProtected('You must be signed in to edit your profile');

  const syncFormToApi = () => {
    if (user.username)
      getUser(user.username).then((userData) => {
          setFormData((prev) => ({
            ...prev,
            displayName: userData.user.displayName,
            about: userData.user.about,
            password: '',
          }));
      });
  };

  useEffect(syncFormToApi, [user]);

  const updateForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    updateUser(user.username, formData.password, formData.displayName, formData.about, user.token)
      .then(() => {
        syncFormToApi();
        dispatch({ type: actions.TOAST, payload: { message: 'Successfully updated profile', statusCode: 200 } });
      });
  };

  const handleDelete = (event) => {
    deleteUser(user.username, user.token)
      .then((response) => {
        if (response.statusCode === 200) {
          history.push('/login');
          dispatch({ type: actions.LOGOUT });
          dispatch({ type: actions.TOAST, payload: { message: 'Account successfully deleted', statusCode: 2 } });
        }
      });
  };
  
  return (
    <div className="profile">
      <h1>Edit Profile</h1>
      <ProfilePicture />
      <div id="delete-button">
        <Button basic color="red" type="button" onClick={handleDelete}>
          Delete Account
        </Button>
      </div>
      <div className="profile-form">
        <Form id="update-user" onSubmit={submitForm}>
          <Form.Field>
            <label>Display Name *</label>
            <Input
              name="displayName"
              placeholder="Display Name"
              value={formData.displayName}
              required
              pattern=".{3,}"
              onChange={updateForm}
            />
          </Form.Field>
          <Form.Field>
            <label>About Me (Optional)</label>
            <TextArea
              name="about"
              placeholder="About"
              value={formData.about}
              onChange={updateForm}
            />
          </Form.Field>
          <Form.Field>
            <label>New Password (Optional)</label>
            <Input placeholder="New Password" 
              name="password"
              value={formData.password}
              type="password" 
              pattern= ".{3,}"
              onChange={updateForm}
            />
          </Form.Field>
          <Button type="submit">Update Profile</Button>
        </Form>
      </div>
    </div>
  );
}

export default Profile;