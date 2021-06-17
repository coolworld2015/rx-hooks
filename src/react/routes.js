import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Users, {UsersContext} from './Users';
import UserEdit from './UserEdit';
import Cool from './Cool';
import CoolEdit from './CoolEdit';
import Table from './Table';
import PhoneEdit from './PhoneEdit';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Table} exact/>
            <Route path="/table" component={Table}/>
            <Route path="/users" component={Users}/>
            <Route path="/cool" component={Cool}/>
            <Route path="/cool_edit" component={CoolEdit}/>
            <Route path="/user/edit" component={UserEdit}/>
            <Route path="/phone/edit" component={PhoneEdit}/>
            {/*      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />*/}
        </Switch>
    )
};

export default Routes;
