import get from 'lodash/get';

import { setComments } from '../comment/actions';
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

/**
 * Multiple posts
 */

export const fetchAllPostsRequest = () => ({
  type: FETCH_ALL_POSTS_REQUEST,
  payload: {
    request: {
      url: '/posts',
    },
  },
});

export const fetchAllPostsSuccess = posts => ({
  type: FETCH_ALL_POSTS_SUCCESS,
  data: posts,
});

export const fetchAllPostsFailure = () => ({
  type: FETCH_ALL_POSTS_FAILURE,
});

export const fetchAllPosts = () => async dispatch => {
  try {
    const res = await dispatch(fetchAllPostsRequest());
    const posts = get(res, 'payload.data');

    // This timeout is just here to showcase the Loading component
    setTimeout(() => {
      dispatch(fetchAllPostsSuccess(posts));
    }, 1500);
  } catch (err) {
    dispatch(fetchAllPostsFailure(err));
  }
};

/**
 * Single post
 */

export const fetchPostRequest = postId => ({
  type: FETCH_POST_REQUEST,
  payload: {
    request: {
      url: `/posts/${postId}?_embed=comments`,
    },
  },
});

export const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  data: post,
});

export const fetchPostFailure = () => ({
  type: FETCH_POST_FAILURE,
});

export const fetchPost = postId => async dispatch => {
  try {
    const res = await dispatch(fetchPostRequest(postId));
    const post = get(res, 'payload.data');
    dispatch(fetchPostSuccess(post));
    dispatch(setComments(get(post, 'comments')));
  } catch (err) {
    dispatch(fetchPostFailure(err));
  }
};

/**
 * Create post
 */

export const createPostRequest = ({ title, body }) => ({
  type: CREATE_POST_REQUEST,
  payload: {
    request: {
      method: 'POST',
      url: '/posts/',
      data: {
        title,
        body,
      },
    },
  },
});

export const createPostSuccess = post => ({
  type: CREATE_POST_SUCCESS,
  data: post,
});

export const createPostFailure = () => ({
  type: CREATE_POST_FAILURE,
});

export const createPost = post => async dispatch => {
  try {
    const res = await dispatch(createPostRequest(post));
    const newPost = get(res, 'payload.data');
    dispatch(createPostSuccess(newPost));
  } catch (err) {
    dispatch(createPostFailure(err));
  }
};

/**
 * Update post
 */

export const updatePostRequest = ({ id, title, body }) => ({
  type: UPDATE_POST_REQUEST,
  payload: {
    request: {
      method: 'PUT',
      url: `/posts/${id}`,
      data: {
        title,
        body,
      },
    },
  },
});

export const updatePostSuccess = post => ({
  type: UPDATE_POST_SUCCESS,
  data: post,
});

export const updatePostFailure = () => ({
  type: UPDATE_POST_FAILURE,
});

export const updatePost = post => async dispatch => {
  try {
    const res = await dispatch(updatePostRequest(post));
    const updatedPost = get(res, 'payload.data');
    console.log('updatedPost', updatedPost);
    dispatch(updatePostSuccess(updatedPost));
  } catch (err) {
    dispatch(updatePostFailure(err));
  }
};
