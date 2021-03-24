import React from 'react';
import { Message, TextArea, Button, Icon, Label } from 'semantic-ui-react';
import '../assets/messageItem.css'

function Messages (props) {
  return(
    <Message compact id="message">
        <div id="user-info">
          <img className="user-image" src="https://via.placeholder.com/50" />
          <div><Message.Header><span>{props.displayName}</span> <br /> <span>@{props.username}</span></Message.Header></div>
        </div>
        <div id="content"><p>{props.message}</p></div>
        <Button as='div' id='like-button' labelPosition='right'>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          {props.likeCount}
        </Label>
        </Button>
    </Message>
  );
}

export default Messages;