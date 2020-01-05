import { INCREMENT, DECREASE } from "./actionTypes";

export function incrementAction() {
    return {
        type: INCREMENT
    };
}
export function decreaseAction() {
    return {
        type: DECREASE
    };
}
export function increment() {
    return function(dispatch, getState) {
        dispatch(incrementAction());
        console.log(getState());
    };
}
export function decrement() {
    return function(dispatch, getState) {
        dispatch(decreaseAction());
        console.log(getState());
    };
}
