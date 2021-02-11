import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Component = () => {
    const { height, width } = useWindowDimensions();
  
    return (
      <div>
        width: {width} ~ height: {height}
      </div>
    );
  }
ReactDOM.render(<Component />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
