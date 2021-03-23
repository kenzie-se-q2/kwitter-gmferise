import React from 'react';
import { Message, TextArea, Button, Icon, Label } from 'semantic-ui-react';

function Messages (props) {
  return(
    <div className="messages">
  <Message compact>
    <div className=""><img /></div>
    <div className=""><Message.Header>{props.displayName} <br /> @{props.username}</Message.Header></div>
    <div className=""><p>{props.message}</p></div>
    <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {props.likeCount}
      </Label>
    </Button>
  </Message>
  </div>
  );
}

export default Messages;