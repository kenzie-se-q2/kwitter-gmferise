const baseURL = 'https://socialapp-api.herokuapp.com/';

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
  fetch(`${baseURL}users/user`, {
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
      'Content-Type': 'applictation/json',
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
    header: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json())
);
