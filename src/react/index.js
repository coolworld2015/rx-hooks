import React, {useContext, useEffect, useReducer, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes';

export const AppConfig = React.createContext();
export const AppContext = React.createContext();

const UsersApp = () => {
    const [config, setConfigItem] = useState({name: 'react hooks'});
    const setConfig = ((item) => {
        return setConfigItem(item);
    });

    const [userItem, setItem] = useState({});
    const setUserItem = ((item) => {
        return setItem(item);
    });

    return (
        <AppConfig.Provider value={{config, setConfig}}>
            <AppContext.Provider value={{userItem, setUserItem}}>
                <Router>
                    <Routes/>
                </Router>
            </AppContext.Provider>
        </AppConfig.Provider>
    )
};

export default UsersApp;