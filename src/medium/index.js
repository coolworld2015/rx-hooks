import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import Topbar from 'components/topbar'
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const MediumApp = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
};

export default MediumApp;