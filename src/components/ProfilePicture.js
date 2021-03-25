import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { putPicture, getPicture } from '../apis/social';
import { useStore, actions } from '../store/store';

function ProfilePicture() {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const [image, setImage] = useState('./default.png');
  const handleSubmitPhoto = (e) => {
    if(e.target.files.length)
    putPicture(user.username, e.target.files[0], user.token)
    .then((response) => {  
      if (response.statusCode === 200){
        dispatch({ type: actions.TOAST, payload: 
        { message: 'Successfully updated profile picture', statusCode: 200} });
        syncPicture();
      } 
      else {
        dispatch({ type: actions.TOAST, payload: response});
      }
    });
  };

  const syncPicture = () => {
    getPicture(user.username)
      .then((res) => res && setImage(res));
  };
   
  useEffect(syncPicture, [user]);

  return(
    <div className="currentImage">
        <img src={image} />
        <input 
        type="file" onChange={handleSubmitPhoto}
        />
  </div>
  );
};

export default ProfilePicture;
