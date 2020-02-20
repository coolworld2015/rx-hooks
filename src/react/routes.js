import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Users, {UsersContext} from './Users';
import Cool from './Cool';
import UserEdit from './UserEdit';
import Table from './Table';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Table} exact />
      <Route path="/users" component={Users} />
      <Route path="/cool" component={Cool} />
      <Route path="/user/edit" component={UserEdit} />
{/*      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />*/}
    </Switch>
  )
};

export default Routes;
