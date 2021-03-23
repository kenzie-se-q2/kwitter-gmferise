import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu';
import { actions, useStore } from '../store/store';
import MessageList from '../components/MessageList';

function Home(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  useEffect(() => {
    if (!user.token) dispatch({ type: actions.TOAST, payload: { message: 'You must log in to view the home page', statusCode: 100 }});
  }, []);

  return (
    <>
      <Menu />
      {!user.token && <Redirect to="/login" />}
      <hr />
      <MessageList />
      <input />
    </>
  );
}

export default Home;
