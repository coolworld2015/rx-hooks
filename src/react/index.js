import React, {useContext, useEffect, useReducer, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes';

export const AppContext = React.createContext();

const UsersApp = () => {
    const [userItem, setItem] = useState({});

    const setUserItem = ((item) => {
        return setItem(item);
    });

    return (
        <AppContext.Provider value={{userItem, setUserItem}}>
            <Router>
                <Routes/>
            </Router>
        </AppContext.Provider>
    )
};

export default UsersApp;