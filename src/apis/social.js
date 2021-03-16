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
  fetch(`${baseURL}Users/createUser`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json())
);

export const updateUser = (username, password, displayName) => (
  fetch(`${baseURL}Users/${username}`, {
    method: 'PATCH',
    headers: { 'Content-Type' : 'applictation/json' },
    body: JSON.stringify({
      password, 
      displayName,
    }),
  }).then((res) => res.json())
);