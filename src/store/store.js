import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';

const initialState = {
  user: {
    token: '',
  },
  messages: [],
  toast: {
    message: '',
    status: 0,
  },
};

export const actions = {
  /** Log in the provided user. Payload is the new user object. */
  LOGIN: 'LOGIN',
  /** Log out the current user. No payload. */
  LOGOUT: 'LOGOUT',
  /** Display a toast. Payload { String message, Number status } */
  TOAST: 'TOAST',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { user: action.payload };
    case actions.LOGOUT:
      return { user: initialState.user };
    case actions.TOAST:
      return { toast: action.payload };
    default:
      return state;
  }
};

// Create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));
