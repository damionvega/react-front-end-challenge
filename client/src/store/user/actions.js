import { ADD_AUTHORIZATION, REMOVE_AUTHORIZATION } from './types';

export const addAuthorization = role => ({
  type: ADD_AUTHORIZATION,
  data: role,
});

export const removeAuthorization = role => ({
  type: REMOVE_AUTHORIZATION,
  data: role,
});
