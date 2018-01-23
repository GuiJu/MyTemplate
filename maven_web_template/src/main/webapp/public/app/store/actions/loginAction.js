/**
 * @file login所使用的相关Action
 */

// 生成Action
const setOptions = (type, bool) => ({type: type, payload: bool});

// Map Redux state to component props
const loginMapState = function (state) {
  return {
    userInfo: state.userInfo
  }
};

// Map Redux actions to component props
const loginMapDispatch = function (dispatch) {
  return {
    setChecked: (bool) => dispatch(setOptions('SET_CHECKED', bool)),
    setAnswered: (bool) => dispatch(setOptions('SET_ANSWERED', bool)),
    setRegistered: (bool) => dispatch(setOptions('SET_REGISTERED', bool)),
    setUsername: (username) => dispatch({type: 'SET_USERNAME', payload: username})
  };
};

export { loginMapState, loginMapDispatch };