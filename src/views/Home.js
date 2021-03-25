import React, { useState } from 'react';
import { useProtected, useStore, actions } from '../store/store';
import { getMessageList, createMessage } from '../apis/social';
import MessageList from '../components/MessageList';
import { Form, Button, TextArea } from 'semantic-ui-react';
import '../assets/home.css';
import Polling from '../store/polling';

function Home() {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const [draft, setDraft] = useState('');
  useProtected('Please sign in to start chatting!');

  const getNewMessages = () => {
    getMessageList(10, 0)
    .then((response) => {
      if (response.statusCode === 200) {
        dispatch({ type: actions.UPDATE_MESSAGES, payload: response.messages });
      }
    });
  };

  const poll = Polling.usePolling(5000, getNewMessages);

  const handleChange = (event) => {
    setDraft(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return createMessage(draft, user.token)
      .then((response) => {
        if (response.statusCode === 200) setDraft('');
      });
  };

  return (
    <div className="home-view">
      <Polling.Context.Provider value={poll}>
        <MessageList />
        <Form className="draftbox" onSubmit={(event) => poll(handleSubmit, event)}>
          <Form.Field>
            <TextArea
              rows={3}
              value={draft}
              placeholder="Draft a message here..."
              onChange={handleChange}
            />
            <Button variant="secondary" type="submit">
              Send
            </Button>
          </Form.Field>
        </Form>
      </Polling.Context.Provider>
    </div>
  );
}

export default Home;
