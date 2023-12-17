
import appReducer from './appReducer';
import { APP_INITIAL_STATE } from "../constants/appConstants";
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
const thunk = require('redux-thunk').default;


const rootReducer = combineReducers({
    app: appReducer,

});


export default configureStore({
    reducer: rootReducer,
    // middleware: applyMiddleware(thunk),
    preloadedState: window.__REDUX_STATE__ || APP_INITIAL_STATE, // Use initial state if available
});
