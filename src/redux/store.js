import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers,
    applyMiddleware(thunk, sagaMiddleware)
);

//sagaMiddleware.run(rootSaga);
//sagaMiddleware.run(otherSaga);

sagaMiddleware.run(sagas);

export default store;