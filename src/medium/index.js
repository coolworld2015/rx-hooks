import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';

const MediumApp = () => {
  return (
    <div className="App">
      <h3>Welcome here is our app</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
};

export default MediumApp;