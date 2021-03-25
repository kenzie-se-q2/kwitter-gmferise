import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { logoutRequest } from '../apis/social';

function Menu() {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = () => {
    logoutRequest(user.token).then(() => dispatch({ type: 'LOGOUT' }));
  };

  return (
    <div id="menu">
      <h1>Kwitter</h1>
      <div id="menu-links">
        <Link to="/messages">Messages</Link>
        {user.token && <button type="button" onClick={logout}>Logout</button>}
      </div>
    </div>
  ); 
}

export default Menu;
