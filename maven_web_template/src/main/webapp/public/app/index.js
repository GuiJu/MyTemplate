import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './login/App';
import '../css/login.css';

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
    case 'SET_CHECKED_TRUE':
      return state.isChecked = true;
    case 'SET_CHECKED_FALSE':
      return state.isChecked = false;
    case 'SET_ANSWERED_TRUE':
      return state.isAnswered = true;
    case 'SET_ANSWERED_FALSE':
      return state.isAnswered = false;
    case 'SET_REGISTERED_TRUE':
      return state.isRegistered = true;
    case 'SET_REGISTERED_FALSE':
      return state.isRegistered = false;
    case 'SET_USERNAME':
      return state.username = action.payload;
    default:
      return state
  }
};

// 生成Action
const setOptions = (type) => ({type: type});

// 发送Action的集合
const dispatchService = {
  setCheckedTrue: () => store.dispatch(setOptions('SET_CHECKED_TRUE')),
  setCheckedFalse: () => store.dispatch(setOptions('SET_CHECKED_FALSE')),
  setAnsweredTrue: () => store.dispatch(setOptions('SET_ANSWERED_TRUE')),
  setAnsweredFalse: () => store.dispatch(setOptions('SET_ANSWERED_FALSE')),
  setRegisteredTrue: () => store.dispatch(setOptions('SET_REGISTERED_TRUE')),
  setRegisteredFalse: () => store.dispatch(setOptions('SET_REGISTERED_FALSE')),
  setUsername: (username) => store.dispatch({type: 'SET_USERNAME', payload: username})
};

// 创建store
const store = createStore(setAuthority);

// 尝试后:不能传store或是dispatchService,所以要使用redux-react
// 否则只能单独传递每个调用store.dispatch. End
render((
  <App userInfo={store.getState().userInfo}/>
), document.getElementById('app'));

store.subscribe(render);