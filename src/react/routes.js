import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Users from './Users';
import Cool from './Cool';
import UserEdit from './UserEdit';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/cool" component={Cool} />
      <Route path="/user/edit" component={UserEdit} />
{/*      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />*/}
    </Switch>
  )
};

export default Routes;
