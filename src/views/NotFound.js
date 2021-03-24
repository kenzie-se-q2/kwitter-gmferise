import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/notFound.css';

function NotFound(props) {
  return ( <><img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"/>  
      <p>Page not found for {props.location.pathname}</p>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
