import React from 'react';
import { useProtected } from '../store/store';
import MessageList from '../components/MessageList';
import { Form, Button, TextArea } from 'semantic-ui-react';

function Home(props) {
  useProtected('Please sign in to start chatting!');

  return (
    <div className="Home-view">
      <MessageList />

      <Form>
        <Form.Field >
          
          <TextArea  rows={3} />

          <Button variant="secondary" size="lg" >
            Send
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
}

export default Home;
