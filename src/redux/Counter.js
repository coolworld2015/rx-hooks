import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { store } from "./store";
import { incrementThunk, decrementThunk } from "./actions";
import Button from "@material-ui/core/Button";

const action = type => store.dispatch({ type });

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.value);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
            <br />
            <br />
            <button onClick={() => dispatch(incrementThunk())}>+</button>
            <button onClick={() => dispatch(decrementThunk())}>-</button>
            <hr />
            <Button
                variant="contained"
                color="primary"
                disableRipple={false}
                onClick={() => action("INCREMENT_ASYNC")}
            >
                INCREMENT
            </Button>
            <Button
                variant="contained"
                color="primary"
                style={{ margin: "20px" }}
                onClick={() => action("DECREMENT_ASYNC")}
            >
                DECREMENT
            </Button>
        </div>
    );
};