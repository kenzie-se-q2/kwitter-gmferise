import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu';
import { useStore } from '../store/store';

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      {!user.token && <Redirect to="/login" />}
    </>
  );
}

export default Home;
