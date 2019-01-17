import pull from 'lodash/fp/pull';

import initialState from '../initialState';
import { ADD_AUTHORIZATION, REMOVE_AUTHORIZATION } from './types';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case ADD_AUTHORIZATION:
      return {
        ...state,
        roles: [...state.roles, action.data],
      };

    case REMOVE_AUTHORIZATION:
      let roles = pull(action.data)([...state.roles]);

      return {
        ...state,
        roles,
      };

    default:
      return state;
  }
};
