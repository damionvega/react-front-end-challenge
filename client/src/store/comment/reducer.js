import filter from 'lodash/fp/filter';

import initialState from '../initialState';
import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  SET_COMMENTS,
} from './types';

export default (state = initialState.comment, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comments: [...state.comments, action.data],
      };

    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case DELETE_COMMENT_REQUEST:
      return { ...state };

    case DELETE_COMMENT_SUCCESS:
      const comments = filter(comment => comment.id !== action.data, [
        ...state.comments,
      ]);

      return {
        ...state,
        comments,
      };

    case DELETE_COMMENT_FAILURE:
      return { ...state };

    case SET_COMMENTS:
      return {
        ...state,
        isFetching: false,
        comments: action.data,
      };

    default:
      return state;
  }
};
