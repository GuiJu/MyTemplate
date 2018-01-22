/**
 * @file redux store
 */
import { createStore } from 'redux';

// Redux defaultState
const defaultState = {
  userInfo: {
    username: null,
    isChecked: false,
    isAnswered: false,
    isRegistered: false
  }
};

// Redux Reducer
const setAuthority = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CHECKED':
      return state.isChecked = action.payload;
    case 'SET_ANSWERED':
      return state.isAnswered = action.payload;
    case 'SET_REGISTERED':
      return state.isRegistered = action.payload;
    case 'SET_USERNAME':
      return state.username = action.payload;
    default:
      return state
  }
};

// Store
export const store = createStore(setAuthority);

