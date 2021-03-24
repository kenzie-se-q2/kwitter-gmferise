import React from 'react';
import { useProtected } from '../store/store';
import MessageList from '../components/MessageList';

function Home(props) {
  useProtected('Please sign in to start chatting!');

  return (
    <>
      <MessageList />
    </>
  );
}

export default Home;
