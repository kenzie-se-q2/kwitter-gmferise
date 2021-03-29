import React, { useEffect } from 'react';
import '../assets/toast.css';

import { actions, useStore } from '../store/store';

const Toast = () => {
  const dispatch = useStore((state) => state.dispatch);
  const toast = useStore((state) => state.toast); 
  const fadeClass = toast?.message ? 'toast-show' : '';

  // When the toast state changes
  useEffect(() => {
    let anim = null;
    if (toast.message) {
      anim = setTimeout(() => dispatch({ type: actions.UNTOAST }), 2000);
    }

    return () => {
      clearTimeout(anim);
    };
  }, [toast]);

  return (
    <div className={`toast toast-${toast.statusCode} ${fadeClass}`}>
      <p>{toast.message}</p>
    </div>
  );
};

export default Toast;

{/* <!-- ////////////////////////////////////////////////////////////
  This is very nicely handled. Error handling is one of my favorite things 
  to work on in a project. It takes each project to the next level.
//////////////////////////////////////////////////////////// --> */}