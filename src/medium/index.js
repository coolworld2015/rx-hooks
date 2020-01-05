import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes';
import Topbar from './components/topbar';

const MediumApp = () => {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  )
};

export default MediumApp;
