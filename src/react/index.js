import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes';

const UsersApp = () => {
  return (
        <Router>
          <Routes />
        </Router>
  )
};

export default UsersApp;