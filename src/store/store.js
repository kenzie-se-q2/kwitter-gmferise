import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import create from 'zustand';
import { devtools, redux } from 'zustand/middleware';

const initialState = {
  user: {
    token: '',
  },
  messages: [],
  toast: {
    message: '',
    statusCode: 0,
  },
};

export const actions = {
  /** Log in the provided user. Payload is the new user object. */
  LOGIN: 'LOGIN',
  /** Log out the current user. No payload. */
  LOGOUT: 'LOGOUT',
  /** Display a toast. Payload { String message, Number statusCode } */
  TOAST: 'TOAST',
  /** Clear the current toast. No payload. */
  UNTOAST: 'UNTOAST',
};

const toastFor = (action, successMessage, successCode = 0) => ({
  message: action.payload?.message || successMessage,
  statusCode: action.payload?.statusCode || successCode
});

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        user: action.payload,
        toast: toastFor(action, `Successfully logged in as ${action.payload.username}`)
      };
    case actions.LOGOUT:
      return {
        user: initialState.user,
        toast: toastFor(action, 'Log out successful', 200)
      };
    case actions.TOAST:
      return { toast: { ...state.toast, ...action.payload } };
    case actions.UNTOAST:
      return { toast: initialState.toast };
    default:
      return state;
  }
};

// Create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));

// Create protected page hook
export const useProtected = (toastMessage = 'You must be signed in to view this page') => {
  const { dispatch, user } = useStore();
  const history = useHistory();

  useEffect(() => {
    if (!user.token) {
      dispatch({ type: actions.TOAST, payload: { message: toastMessage , statusCode: 1 } });
      history.replace('/login');
    }
  }, [user]);
};