// import { combineReducers, createStore } from 'redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga'
import createSagaMiddleware from '../saga-koukin';
import userSaga from '../saga/index';
import rootSaga from '../saga/rootSaga';
import userReducer from './reducers/user.js';

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        case 'ADDF':
            return state + action.payload.num;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReducers({ count: countReducer, user: userReducer }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware])
});

sagaMiddleware.run(rootSaga);

export default store;