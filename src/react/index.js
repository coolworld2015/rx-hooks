import React, {useContext, useReducer, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes';

const initialState = {
    method: () => null,
    counter: 0
};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_METHOD":
            return {
                ...state,
                method: action.data
            };
        case "INCREASE_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREASE_COUNTER":
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

export const AppConfig = React.createContext();
export const AppContext = React.createContext();

const UsersApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [item, setItem] = useState({});
    const setContextItem = ((item) => {
        return setItem(item);
    });

    return (
        <AppConfig.Provider value={{state, dispatch}}>
            <AppContext.Provider value={{item, setContextItem}}>
                <Router>
                    <Header/>
                    <Routes/>
                </Router>
            </AppContext.Provider>
        </AppConfig.Provider>
    )
};

export default UsersApp;

const Header = () => {
    const {state, dispatch} = useContext(AppConfig);
    const {counter} = state;
    return (
        <div>Header - {counter}</div>
    )
};

/*
import React, { useContext, useEffect, useReducer } from "react";
import { render } from "react-dom";

export const AppContext = React.createContext();

const initialState = {
  method: () => null
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_METHOD":
      return {
        ...initialState,
        method: action.data
      };
    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ChildOne />
      <ChildTwo />
    </AppContext.Provider>
  );
};

const ChildOne = () => {
  const { dispatch } = useContext(AppContext);
  const childOneMethod = () => console.log("childOneMethod");

  useEffect(() => {
    dispatch({ type: "ADD_METHOD", data: childOneMethod });
  }, []);

  return <div>ChildOne</div>;
};

const ChildTwo = () => {
  const { state } = useContext(AppContext);
  state.method();

  return <div onClick={() => state.method()}>ChildTwo</div>;
};
render(<App />, document.getElementById("root"));

*/

/*
import React, { useContext, useEffect, useReducer, useState } from "react";
import { render } from "react-dom";

export const ChildrenWrapper = React.createContext();
export const AppContext = React.createContext();

const initialState = {
    method: () => null
};

const reducer = (initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_METHOD":
            return {
                ...initialState,
                method: action.data
            };
        default:
            return initialState;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [customState, setState] = useState({
        appMethod: () => console.log("appMethod")
    });

    const setCustomState = state => {
        return setState(state);
    };

    return (
        <ChildrenWrapper.Provider value={{ customState, setCustomState }}>
            <AppContext.Provider value={{ state, dispatch }}>
                <ChildOne />
                <ChildTwo />
            </AppContext.Provider>
        </ChildrenWrapper.Provider>
    );
};

const ChildOne = () => {
    const { customState, setCustomState } = useContext(ChildrenWrapper);
    //customState.appMethod();
    const childOneMethod = () => console.log("childOneMethod");
    const newCustomState = { ...customState, childOneMethod };
    //console.log("One", newCustomState);

    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        setCustomState(newCustomState);

        dispatch({ type: "ADD_METHOD", data: childOneMethod });
        console.log("One", state);
    }, []);

    console.log("One", state);
    return <div>ChildOne</div>;
};

const ChildTwo = () => {
    const { customState, setCustomState } = useContext(ChildrenWrapper);
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        //console.log("Two", customState);
        //customState.childOneMethod();
    }, []);
    state.method();
    return <div>ChildTwo</div>;
};
render(<App />, document.getElementById("root"));

*/

/*
import React, { useState, useRef } from "react";
import { render } from "react-dom";

const App = () => {
  const childOneRef = useRef();

  return (
    <React.Fragment>
      <ChildOne ref={childOneRef} />
      <ChildTwo triggerChildOne={() => childOneRef.current.helloChildTwo()} />
    </React.Fragment>
  );
};

class ChildOne extends React.Component {
  constructor(props) {
    super(props);

    this.helloChildTwo = this.helloChildTwo.bind(this);
  }

  helloChildTwo() {
    return "Hello from child one";
  }

  render() {
    return <div>Child One</div>;
  }
}

const ChildTwo = ({ triggerChildOne }) => {
  const [title, setTitle] = useState("Default Child Two Title");

  return <div onClick={() => setTitle(triggerChildOne)}>{title}</div>;
};

render(<App />, document.getElementById("root"));

 */
