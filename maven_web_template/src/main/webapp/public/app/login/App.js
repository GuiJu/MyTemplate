/**
 * @file app组件
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgetPs from './ForgetPs';
import ForgetPsNext from './ForgetPsNext';
import ResetPs from './ResetPs';

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={() => <Login userInfo={props.userInfo}/>}/>
        <Route path='/forgetPs' component={() => <ForgetPs {...props} userInfo={props.userInfo}/>}/>
        <Route path='/forgetPsNext' component={() => <ForgetPsNext {...props} userInfo={props.userInfo}/>}/>
        <Route path='/resetPs' component={() => <ResetPs {...props} userInfo={props.userInfo}/>}/>
        <Route path='/register' component={() => <Register {...props} userInfo={props.userInfo}/>}/>
      </div>
    </Router>
  );
};


export default App;