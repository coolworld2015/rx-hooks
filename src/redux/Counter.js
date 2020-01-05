import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.value);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{counter}</h1>
            <br />
            <br />
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
            <br />
            <br />
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};