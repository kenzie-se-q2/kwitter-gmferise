import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../assets/navigation.css';
import { useStore } from '../store/store';
import { logoutRequest } from '../apis/social';

function Navigation () {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();

  const logout = () => {
    logoutRequest(user.token).then(() => {
      history.push('/login');
      dispatch({ type: 'LOGOUT' });
    });
  };

  return(
    <div id="nav-bar">
      <Button id="nav-back-button" onClick={history.goBack}>Back</Button>
{/* <!-- ////////////////////////////////////////////////////////////
Nice use of history. This is used frequently in native React Apps to 
mimick websites. It's a wonderful thing to study.
//////////////////////////////////////////////////////////// --> */}
      <h1 className="site-title">Bitter</h1>
      <div id="nav-buttons">
        {user.token ? 
          (<>
            <Link to="/">Chat</Link>
            <Link to="/profile">Edit Profile</Link>
            <a onClick={logout}>Logout</a>  
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