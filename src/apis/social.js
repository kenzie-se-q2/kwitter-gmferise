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

export const updateUser = (username, password, displayName, token) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      displayName,
    }),
  }).then((res) => res.json())
);

export const deleteUser = (username, token) => (
  fetch(`${baseURL}users/${username}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
);

export const setPicture = (username, formData, token) => (
  fetch(`${baseURL}users/${username}/picture`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  }).then((res) => res.json())
);

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
    body: JSON.stringify({message})
  }).then((res) => res.json())
);

export const addLike = (messageId, token) => (
  fetch(`${baseURL}likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: messageId
  }).then((res) => res.json())
);

export const removeLike = (likeId, token) => (
  fetch(`${baseURL}likes/${likeId}`, {
    method: 'DELETE',
    headers: {Authorization: `Bearer ${token}`},
  }).then((res) => res.json())
);

export const getMessageList = (username, limit, offset) => (
  fetch(`${baseURL}messages?limit=${limit}&offset=${offset}&username=${username}`, {
    method: 'GET'
  }).then((res) => res.json())
);

export const deleteMessage = (messageId, token) => (
  fetch(`${baseURL}messages/${messageId}`, {
    method: 'DELETE',
    headers: {Authorization: `Bearer ${token}`}
  }).then((res) => res.json())
);
