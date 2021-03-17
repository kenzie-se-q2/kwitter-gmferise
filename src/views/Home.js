import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu';
import { useStore } from '../store/store';
import MessageList from '../components/MessageList';

function Home(props) {
  const user = useStore((state) => state.user);
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
