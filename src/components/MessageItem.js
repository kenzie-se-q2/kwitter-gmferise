import React, { useState, useEffect, useContext } from 'react';
import { Message, TextArea, Button, Icon, Label } from 'semantic-ui-react';
import '../assets/messageItem.css';
import { getUser, baseURL, addLike, removeLike } from '../apis/social';
import { useStore } from '../store/store';
import Polling from '../store/polling';

function Messages (props) {
  const [userData, setUserData] = useState({
    displayName: '',
    picture: './default.png',
  });
  const user = useStore((state) => state.user);
  const poll = useContext(Polling.Context);

  const like = props.likes.find((like) => like.username === user.username);
  const isLiked = !!like;

  // When props change
  useEffect(() => {
    getUser(props.username).then((response) => {
      if (response.statusCode === 200)
        setUserData((prev) => ({
          displayName: response.user.displayName,
          picture: response.user.pictureLocation ? baseURL.slice(0, -1) + response.user.pictureLocation : prev.picture,
        }));
    });
  }, []);

  const toggleLike = () => {
    return isLiked ?
      removeLike(props.likes.find((like) => like.username === user.username).id, user.token)
      : addLike(props.id, user.token);
  };

  return(
    <Message compact id="message">
        <div id="user-info">
          <img className="user-image" src={userData.picture} />
          <div><Message.Header><span>{userData.displayName}</span> <br /> <span>@{props.username}</span></Message.Header></div>
        </div>
        <div id="content"><p>{props.text}</p></div>
        <Button as='div' id='like-button' labelPosition='right'>
        <Button 
          className={isLiked ? 'liked' : ''}
          icon
          type="button" onClick={() => poll(toggleLike)}>
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