/**
 * @file 前台登录部分路由
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import App from './login/app';
import Login from './login/login';
import ForgetPs from './login/forgetPs';
import ForgetPsNext from './login/forgetPsNext';
import ResetPs from './login/resetPs';

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}/>
      <Route path='/forgetPs' component={ForgetPs}/>
      <Route path='/forgetPsNext' component={ForgetPsNext}/>
      <Route path='/resetPs' component={ResetPs}/>
    </Route>
  </Router>
), document.getElementById('app'));