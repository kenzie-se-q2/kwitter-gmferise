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
    <div className="navBar">
      <div id="back-button">
        <Button onClick={props.history.goBack}>Back</Button>
      </div>
      <div id="nav-link">
        <Link to="/">Home</Link>        
        {user.token ? <a onClick={logout}>Logout</a> : <Link to="/login">Login</Link>}
        <Link to="/signup">Create Account</Link>
      </div>
    </div>
  );
}

export default Navigation;