import React, { useEffect, useState } from 'react';
import '../assets/toast.css';

import { actions, useStore } from '../store/store';

const Toast = () => {
  const toast = useStore((state) => state.toast);
  const visible = useState(false);
  
  const fadeClass = visible ? '' : '';

  // When the toast state changes
  useEffect(() => {

  }, [toast]);

  return (
    <div className={`toast toast-${toast.status} ${fadeClass}`}>
      {toast.text}
    </div>
  );
};

export default Toast;