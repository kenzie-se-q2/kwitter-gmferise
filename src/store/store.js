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
  /** Set the message list. Payload is an array of messages. */
  UPDATE_MESSAGES: 'UPDATE_MESSAGES',
  /** Reset the message lsit. No payload. */
  RESET_MESSAGES: 'RESET_MESSAGES',
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
    case actions.UPDATE_MESSAGES:
      return { messages: action.payload };
    case actions.RESET_MESSAGES:
      return { messages: initialState.messages };
    default:
      return state;
  }
};

{/* <!-- ////////////////////////////////////////////////////////////
  The toast logic you've created throughout the project could be replicated to create
  a 'loader'. Typically a loader is a place holder for while the fetch is happening.
  There would be an additional dispatch and action before the fetch call,
  then onces the fetch completes the loader would be set back to false.
//////////////////////////////////////////////////////////// --> */}
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