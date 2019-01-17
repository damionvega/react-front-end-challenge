import initialState from '../initialState';
import {
  FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
} from './types';

export default (state = initialState.post, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.data,
      };

    case FETCH_ALL_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        post: action.data,
      };

    case FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case CREATE_POST_REQUEST:
      return { ...state };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        post: action.data,
      };

    case CREATE_POST_FAILURE:
      return { ...state };

    case UPDATE_POST_REQUEST:
      return { ...state };

    case UPDATE_POST_SUCCESS:
      console.log('action.data', action.data);
      return {
        ...state,
        post: action.data,
      };

    case UPDATE_POST_FAILURE:
      return { ...state };

    default:
      return state;
  }
};
