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

// Redux Reducer, 注意要返回新的state对象
const setAuthority = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CHECKED':
      state.userInfo.isChecked = action.payload;
      return state;
    case 'SET_ANSWERED':
      state.userInfo.isAnswered = action.payload;
      return state;
    case 'SET_REGISTERED':
      state.userInfo.isRegistered = action.payload;
      return state;
    case 'SET_USERNAME':
      state.userInfo.username = action.payload;
      return state;
    default:
      return state
  }
};

// Store
export const store = createStore(setAuthority);

