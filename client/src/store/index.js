import { applyMiddleware, createStore, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunkMiddleware from 'redux-thunk';

import { API_ENDPOINT } from '../config';
import initialState from './initialState';
import commentReducer from './comment/reducer';
import postReducer from './post/reducer';
import userReducer from './user/reducer';

export const reducers = combineReducers({
  comment: commentReducer,
  post: postReducer,
  user: userReducer,
});

const middlewares = [thunkMiddleware];

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
});

// Store initializer (used in top level component)
export const initStore = (state = initialState) => {
  let enhancer = applyMiddleware(...middlewares);

  // Only enable redux dev tools on development environments.
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension'); // eslint-disable-line global-require
    enhancer = composeWithDevTools(
      applyMiddleware(...middlewares, axiosMiddleware(axiosClient)),
    );
  }

  return createStore(reducers, { ...state }, enhancer);
};
