const baseURL = 'https://kwitter-api-b.herokuapp.com/';

export const loginRequest = (username, password) => (
  fetch(`${baseURL}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json())
);

export const logoutRequest = (token) => (
  fetch(`${baseURL}auth/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
);

export const createUser = (username, displayName, password) => (
  fetch(`${baseURL}users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json())
);

export const updateUser = (username, password, displayName, about, token) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      displayName,
      about,
    }),
  }).then((res) => res.json())
);

export const deleteUser = (username, token) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
);

export const setPicture = (username, pictureData, token) => {
  let formData = new FormData();
  formData.append('picture', pictureData);

  return fetch(`${baseURL}users/${username}/picture`, {
    method: 'PUT',
    headers: { 
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
  },
    body: formData,
  }).then((res) => res.json());
};

export const getPicture = (username) => (
  fetch(`${baseURL}users/${username}/picture`, {
    method: 'GET',
  }).then((res) => res.json())
);

export const createMessage = (message, token) => (
  fetch(`${baseURL}messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text: message })
  }).then((res) => res.json())
);

export const addLike = (id, token) => (
  fetch(`${baseURL}likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify( { messageId: id })
  }).then((res) => res.json())
);

export const removeLike = (likeId, token) => (
  fetch(`${baseURL}likes/${likeId}`, {
    method: 'DELETE',
    headers: {Authorization: `Bearer ${token}`},
  }).then((res) => res.json())
);

export const getMessageList = (limit, offset) => (
  fetch(`${baseURL}messages?limit=${limit}&offset=${offset}`, {
    method: 'GET'
  }).then((res) => res.json())
);

export const getUser = (username) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'GET',
  }).then((res) => res.json())
);
