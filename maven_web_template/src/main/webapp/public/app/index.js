import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
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

render((
  <Provider store={store}>
    <App userInfo={store.getState().userInfo}/>
  </Provider>
), document.getElementById('app'));

store.subscribe(render);