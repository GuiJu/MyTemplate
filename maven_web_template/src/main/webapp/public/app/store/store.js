/**
 * @file redux store
 */
import { createStore, combineReducers } from 'redux';

// Redux defaultState
const defaultState = {
  username: null,
  isChecked: false,
  isAnswered: false,
  isRegistered: false
};

// Redux Reducer, 注意要返回新的state对象
const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CHECKED':
      // 不要修改State,而是返回一个新的副本
      return Object.assign({}, state, {isChecked: action.payload});
    case 'SET_ANSWERED':
      return Object.assign({}, state, {isAnswered: action.payload});
    case 'SET_REGISTERED':
      return Object.assign({}, state, {isRegistered: action.payload});
    case 'SET_USERNAME':
      return Object.assign({}, state, {username: action.payload});
    default:
      return state
  }
};

const loginApp = combineReducers({
  userInfo,
});

// Store
export const store = createStore(loginApp);

