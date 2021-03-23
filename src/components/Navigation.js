import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../assets/navigation.css';
import { useStore } from '../store/store';
import { logoutRequest } from '../apis/social';

function Navigation (props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(() => dispatch({ type: 'LOGOUT' }));
  };

  return(
    <div id="nav-bar">
      <Button id="nav-back-button" onClick={props.history.goBack}>Back</Button>
      <h1 className="site-title">Bitter</h1>
      <div id="nav-buttons">
        <Link to="/">Home</Link>        
        {user.token ? 
          (<>
            <a onClick={logout}>Logout</a>  
            <Link to="/profile">Edit Profile</Link>
          </>)
          
          : (<>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>)
        }
      </div>
    </div>
  );
}

export default Navigation;