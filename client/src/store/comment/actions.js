import get from 'lodash/get';

import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  SET_COMMENTS,
} from './types';

export const createCommentRequest = (postId, body) => ({
  type: CREATE_COMMENT_REQUEST,
  payload: {
    request: {
      method: 'POST',
      url: '/comments',
      data: {
        postId,
        body,
      },
    },
  },
});

export const createCommentSuccess = commentId => ({
  type: CREATE_COMMENT_SUCCESS,
  data: commentId,
});

export const createCommentFailure = () => ({
  type: CREATE_COMMENT_FAILURE,
});

export const createComment = (postId, commentBody) => async dispatch => {
  try {
    const res = await dispatch(createCommentRequest(postId, commentBody));
    const comment = get(res, 'payload.data');
    dispatch(createCommentSuccess(comment));
  } catch (err) {
    dispatch(createCommentFailure(err));
  }
};

export const deleteCommentRequest = commentId => ({
  type: DELETE_COMMENT_REQUEST,
  payload: {
    request: {
      method: 'DELETE',
      url: `/comments/${commentId}`,
    },
  },
});

export const deleteCommentSuccess = commentId => ({
  type: DELETE_COMMENT_SUCCESS,
  data: commentId,
});

export const deleteCommentFailure = () => ({
  type: DELETE_COMMENT_FAILURE,
});

export const deleteComment = commentId => async dispatch => {
  try {
    await dispatch(deleteCommentRequest(commentId));
    dispatch(deleteCommentSuccess(commentId));
  } catch (err) {
    dispatch(deleteCommentFailure(err));
  }
};

export const setComments = comments => ({
  type: SET_COMMENTS,
  data: comments,
});
