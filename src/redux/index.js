import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import PageClass from "./Page";
import { Counter } from "./Counter";

import { decreaseAction } from "./actions";

const ReduxApp = () => (
    <Provider store={store}>
        <Counter />
        <PageClass />
    </Provider>
);

export default ReduxApp;

//store.dispatch({ type: 'INCREMENT' })

store.dispatch(function(dispatch) {
    dispatch({ type: "INCREMENT" });
});

testAction()(store.dispatch);

function testAction() {
    return function(dispatch, getState) {
        dispatch(decreaseAction());
    };
}

//https://react-redux.js.org/next/api/hooks
