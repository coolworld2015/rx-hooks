import { put, takeEvery, delay, all, fork } from "redux-saga/effects";

export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: "INCREMENT" });
}

export function* rootSaga() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* decrementAsync() {
    yield delay(1000);
    yield put({ type: "DECREASE" });
}

export function* otherSaga() {
    yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

export default function* sagas() {
    yield all([fork(rootSaga), fork(otherSaga)]);
}
