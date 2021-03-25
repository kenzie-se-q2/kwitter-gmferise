import { useEffect, createContext } from 'react';

const Polling = {
  /** 
   * @param {Number} interval How often to poll in ms
   * @param {Function} callback Function that will be called
   */
  usePolling: (interval, callback) => {
    useEffect(() => {
      callback();
      const pollInterval = setInterval(callback, interval);

      return () => {
        clearInterval(pollInterval);
      };
    }, []);

    return (triggerFunction, ...args) => {
      triggerFunction(...args)?.then(callback);
    };
  },

  Context: createContext(() => {}),

};

export default Polling;