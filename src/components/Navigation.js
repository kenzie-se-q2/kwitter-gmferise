import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../assets/navigation.css';

function Navigation (props) {
return(
    <div className="navBar">
      <div id="back-button">
        <Button onClick={props.history.goBack}>Back</Button>
      </div>
      <div id="nav-link">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Create Account</Link>
      </div>
    </div>
);
}

export default Navigation;